import React, { useCallback, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { RiKey2Line } from 'react-icons/ri'
import ClassItem, { ClassItemProps } from '../components/ClassItem'
import Modal from '../components/Modal'
import { Link, useRoute } from 'wouter'
import ClassItemSkeleton from '../components/skeletons/ClassItemSkeleton'
import { classesData as initialClasses } from '../utils/dummy'
import Tabs from '../components/Tabs'
import PageLayout from './PageLayout'
import { Helmet } from 'react-helmet'
import { createTitle } from '../utils/utils'

let classesData = initialClasses

interface ClassItemsProp {
  classes: ClassItemProps[]
  onBookmarkClick?: (slug: string) => any
}

const ClassItems = ({ classes, onBookmarkClick }: ClassItemsProp) => {
  return (
    <div className="space-y-5">
      {classes.map(classProps => (
        <div key={classProps.slug} className="hover:shadow-sm">
          <ClassItem
            {...classProps}
            onBookmarkClick={e => {
              if (onBookmarkClick) {
                onBookmarkClick(classProps.slug)
              }
            }}
          />
        </div>
      ))}
    </div>
  )
}

const getClasses = async (type: string) => {
  return new Promise(resolve => {
    setTimeout(() => {
      switch (type) {
        case 'today':
          return resolve(
            classesData.filter(
              c => c.schedules.filter(s => s.day === dayjs().day()).length > 0
            )
          )
        case 'bookmark':
          return resolve(classesData.filter(c => c.isBookmarked))
        case 'all':
          return resolve(classesData)
        default:
          return resolve([])
      }
    }, Math.random() * 1000)
  })
}

const Classes = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [classes, setClasses] = React.useState(classesData)
  const [, params] = useRoute('/c/:id')
  const [loading, setLoading] = useState(false)

  const handleBookmark = (slug: string) => {
    setClasses(cls =>
      cls.map(c =>
        c.slug === slug ? { ...c, isBookmarked: !c.isBookmarked } : c
      )
    )
    classesData = classesData.map(c =>
      c.slug === slug ? { ...c, isBookmarked: !c.isBookmarked } : c
    )
  }

  const fetchAndSetClasses = useCallback(id => {
    setLoading(true)
    getClasses(id).then(classes => {
      const data = classes as ClassItemProps[]
      setClasses(data)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (params && params.id) {
      fetchAndSetClasses(params.id)
    }
  }, [params?.id])

  return (
    <PageLayout>
      <Helmet>
        <title>{createTitle('Classes')}</title>
      </Helmet>
      <PageLayout.Main>
        <div id="contentHeader" className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Classes</h1>
          <button
            className="btn rounded-full dark:bg-dark-500 dark:text-white"
            onClick={() => setVisible(true)}>
            <RiKey2Line /> <span>Join using code {visible}</span>
          </button>
        </div>
        <Tabs>
          <Tabs.TabsItem isActive={params?.id === 'today'}>
            <Link href="/c/today">Today</Link>
          </Tabs.TabsItem>
          <Tabs.TabsItem isActive={params?.id === 'all'}>
            <Link href="/c/all">All</Link>
          </Tabs.TabsItem>
          <Tabs.TabsItem isActive={params?.id === 'bookmark'}>
            <Link href="/c/bookmark">Bookmarked</Link>
          </Tabs.TabsItem>
        </Tabs>
        <div id="cards" className="mt-7">
          {loading ? (
            <ClassItemSkeleton />
          ) : (
            <ClassItems classes={classes} onBookmarkClick={handleBookmark} />
          )}
        </div>
      </PageLayout.Main>
      <PageLayout.RightBar>
        <div className="bg-gradient-to-tr from-pink-500 to-pink-300 px-6 py-6 text-white rounded-2xl relative overflow-hidden">
          <div className="rounded-full w-40 h-40 bg-white bg-opacity-10 absolute -bottom-7 -left-7 z-0"></div>
          <div className="rounded-full w-32 h-32 bg-white bg-opacity-20 absolute -right-3 -top-3 z-0"></div>
          <div className="relative flex flex-col items-center justify-center z-10">
            <h2 className="text-xl font-bold mb-4">Did You Know?</h2>
            <p className="text-center font-medium">
              Have you heard about a Palindrome Number? It is a number that
              reads the same backwards and forward, e.g. 12421
            </p>
          </div>
        </div>
      </PageLayout.RightBar>
      <Modal visible={visible} title="Join class">
        <div className="my-10">
          <input
            type="text"
            className="w-full py-2 px-4 rounded bg-gray-200 border border-gray-300 dark:bg-dark-500 dark:border-dark-400 dark:text-white"
            placeholder="Enter 6 digit code"
          />
        </div>
        <div className="flex justify-center space-x-4 mt-10">
          <button
            className="btn w-1/2 dark:bg-dark-400 dark:text-white"
            onClick={() => setVisible(false)}>
            Cancel
          </button>
          <button className="btn btn-primary w-1/2">Join</button>
        </div>
      </Modal>
    </PageLayout>
  )
}

export default Classes
