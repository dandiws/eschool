import React, { useState } from 'react'
import { RiBookmarkFill, RiKey2Line } from 'react-icons/ri'
import { Link } from 'wouter'
import { Helmet } from 'react-helmet'
import { createTitle } from '../../utils/utils'
import { useSearchParam } from 'react-use'
import { useQuery } from 'react-query'
import { request, gql } from 'graphql-request'
import ClassList from './ClassList'
import ClassItemSkeleton from '../skeletons/ClassItemSkeleton'
import PageLayout from '../../pages/PageLayout'
import Tabs from '../Tabs'
import Modal from '../Modal'

const endpoint = 'http://localhost:9002/graphql'

const useClasses = (filter: string) =>
  useQuery(['classes', filter], async () => {
    const { classes } = await request(
      endpoint,
      gql`
        query {
          classes {
            id
            name
            slug
            teachers {
              id
              name
              title
            }
            schedules {
              day
              startTime
              endTime
            }
            meetUrl
            isBookmarked
          }
        }
      `
    )
    return classes
  })

const Classes = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const tab = useSearchParam('tab')
  const { data, isFetching, isError, error } = useClasses(tab || '')

  const bookmarked = useClasses('bookmarked`')

  if (isError) return <div>{(error as any).toString()}</div>

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
            onClick={() => setShowModal(true)}>
            <RiKey2Line /> <span>Join using code</span>
          </button>
        </div>
        <Tabs>
          <Tabs.TabsItem isActive={!tab}>
            <Link href="/classes">Today</Link>
          </Tabs.TabsItem>
          <Tabs.TabsItem isActive={tab === 'all'}>
            <Link href="/classes?tab=all">All</Link>
          </Tabs.TabsItem>
        </Tabs>
        <div id="cards" className="mt-7">
          {isFetching ? (
            <ClassItemSkeleton />
          ) : (
            <ClassList classes={data} onBookmarkClick={() => {}} />
          )}
        </div>
      </PageLayout.Main>
      <PageLayout.RightBar>
        <div>
          <div className="mb-3">
            <h3>
              Bookmarked <RiBookmarkFill />
            </h3>
          </div>
          <div>
            {bookmarked.isFetching && <div>Loading...</div>}
            {!bookmarked.isFetching &&
              bookmarked.data.map((c: any) => (
                <div key={c.slug}>
                  <Link
                    to={`classes/${c.slug}`}
                    className="leading-relaxed hover:text-indigo-500">
                    {c.name}
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </PageLayout.RightBar>
      <Modal visible={showModal} title="Join class">
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
            onClick={() => setShowModal(false)}>
            Cancel
          </button>
          <button className="btn btn-primary w-1/2">Join</button>
        </div>
      </Modal>
    </PageLayout>
  )
}

export default Classes
