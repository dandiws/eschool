import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import {
  RiChat3Line,
  RiHeart2Line,
  RiMailAddLine,
  RiMessageLine,
  RiTimerLine,
  RiVolumeVibrateFill
} from 'react-icons/ri'
import { Link, useLocation } from 'wouter'
import { createTitle } from '../utils/utils'
import Alert from '../components/Alert'
import { ClassItemProps } from '../components/classes/ClassItem'
import Tabs from '../components/Tabs'
import PageLayout from './PageLayout'
import Avatar from '../components/Avatar'
import dayjs from 'dayjs'
import Card from '../components/Card'
// import { useSearchParam } from 'react-use'

interface ClassProps {
  slug: string
}

const Class = (props: ClassProps) => {
  const [data] = useState<ClassItemProps | undefined>(() =>
    classesData.find(c => c.slug === props.slug)
  )
  const [location] = useLocation()

  return (
    <PageLayout>
      <Helmet>
        <title>{createTitle(data?.name)}</title>
      </Helmet>
      <PageLayout.Main>
        <div id="contentHeader" className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">{data?.name}</h1>
        </div>
        <Tabs>
          <Tabs.TabsItem>
            <Link href={`${location}`}>Discussion</Link>
          </Tabs.TabsItem>
          <Tabs.TabsItem>
            <Link href={`${location}/materials`}>Materials</Link>
          </Tabs.TabsItem>
          <Tabs.TabsItem>
            <Link href={`${location}/assignments`}>Assignments</Link>
          </Tabs.TabsItem>
          <Tabs.TabsItem>
            <Link href={`${location}/participants`}>Participants</Link>
          </Tabs.TabsItem>
          <Tabs.TabsItem>
            <Link href={`${location}/about`}>About</Link>
          </Tabs.TabsItem>
        </Tabs>
        <div className="mt-5 space-y-8">
          <Alert type="info">
            <div className="mb-3 flex justify-between">
              <span className="font-semibold">
                <RiVolumeVibrateFill /> Announcement
              </span>
              <span className="text-xs">5 hours ago</span>
            </div>
            <p className="lg:text-sm">
              Remidi akan dilakukan pada hari Rabu 5 Agustus 2021. Semua siswa
              diharapkan mengecek nilai tugas 5 &quot;Kalimat Induktif&quot;
              pada kolom Penugasan.
            </p>
          </Alert>
          <div className="flex justify-end">
            <select name="" id="" className="px-2 py-1 text-sm rounded">
              <option value="newer">Newer first</option>
              <option value="older">Older first</option>
              <option value="popular">Popular first</option>
              <option value="leastpopular">Least popular first</option>
            </select>
          </div>
          <div className="space-y-4">
            {Array(4)
              .fill(null)
              .map((el, i) => (
                <Card key={i}>
                  <div className="px-6 py-4 flex space-x-6">
                    <Avatar url={`https://i.pravatar.cc/50?img=${i + 1}`} />
                    <div>
                      <h2>
                        <Link to="/">How to sort nested array?</Link>
                      </h2>
                      <span className="text-xs text-gray-500">
                        {dayjs().format('DD MMMM YYYY HH:mm')}
                      </span>
                      <p className="mt-2 lg:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia, tenetur?
                      </p>
                    </div>
                  </div>
                  <Card.CardFooter className="flex text-sm space-x-4">
                    <div>
                      <RiHeart2Line /> {Math.round(Math.random() * 33)} people
                      like this
                    </div>
                    <div>
                      <RiMessageLine /> {Math.round(Math.random() * 20)}{' '}
                      comments
                    </div>
                  </Card.CardFooter>
                </Card>
              ))}
          </div>
        </div>
      </PageLayout.Main>
      <PageLayout.RightBar>
        <div className="space-y-10 mt-12">
          <div>
            <div className="flex justify-between mb-4">
              <h3>Assignments</h3>
              <a href="/all">
                <small>see all</small>
              </a>
            </div>
            <Link href="/">
              <div className="-mx-3 py-3 px-3 cursor-pointer rounded-lg flex justify-between text-sm hover:bg-gray-200">
                <h4 className="font-normal">Tugas 5: Relasi dan Fungsi</h4>
                <div className=" text-red-500 font-medium whitespace-nowrap ml-2">
                  <RiTimerLine /> in 3 hours
                </div>
              </div>
            </Link>
            <hr />
            <Link href="/">
              <div className="-mx-3 py-3 px-3 cursor-pointer rounded-lg flex justify-between text-sm hover:bg-gray-200">
                <h4 className="font-normal">
                  Tugas 6: Pertidaksamaan dan Persamaan Kuadrat
                </h4>
                <div className=" text-indigo-500 font-medium whitespace-nowrap ml-2">
                  <RiTimerLine /> in 5 days
                </div>
              </div>
            </Link>
          </div>
          <div>
            <div className="mb-4">
              <h3>Teachers</h3>
            </div>
            <div className="space-y-2 text-sm">
              {data?.teachers.map((t, i) => (
                <div key={t.name} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar url={`https://i.pravatar.cc/50?img=${39 + i}`} />
                    <div className="ml-4 font-medium">
                      {t.title} {t.name} {t.degree}
                    </div>
                  </div>
                  <div className="space-x-2">
                    <button className="rounded h-8 w-8 bg-gray-200 hover:bg-indigo-400 hover:text-white transition-colors">
                      <RiChat3Line />
                    </button>
                    <button className="rounded h-8 w-8 bg-gray-200 hover:bg-indigo-400 hover:text-white transition-colors">
                      <RiMailAddLine />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-4">
              <h3>Schedules</h3>
            </div>
            <div className="space-y-4 text-sm">
              {data?.schedules.map((s, i) => (
                <div key={s.startTime.valueOf()} className="flex">
                  {dayjs().day(s.day).format('dddd')},{' '}
                  {dayjs(s.startTime).format('HH:mm')} -{' '}
                  {dayjs(s.endTime).format('HH:mm')}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-4">
              <h3>Participants</h3>
              <a href="/all">
                <small>see all</small>
              </a>
            </div>
            <div className="flex flex-wrap justify-start">
              {Array(17)
                .fill(1)
                .map((_, i) => (
                  <div key={i} className="mr-1 mb-1">
                    <Avatar
                      url={`https://i.pravatar.cc/50?img=${i + 10}`}
                      onlineStatus={
                        Math.floor(Math.random() * 99999) % 2 === 0
                          ? 'active'
                          : undefined
                      }
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </PageLayout.RightBar>
    </PageLayout>
  )
}

export default Class
