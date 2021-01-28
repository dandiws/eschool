import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { RiVolumeVibrateFill } from 'react-icons/ri'
import { Link, useLocation } from 'wouter'
import { createTitle } from '../utils/utils'
import Alert from '../components/Alert'
import { ClassItemProps } from '../components/ClassItem'
import Tabs from '../components/Tabs'
import { classesData } from '../utils/dummy'
import PageLayout from './PageLayout'

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
            <Link href="/c/all">Materials</Link>
          </Tabs.TabsItem>
          <Tabs.TabsItem>
            <Link href="/c/bookmark">Assignments</Link>
          </Tabs.TabsItem>
          <Tabs.TabsItem>
            <Link href="/c/bookmark">Participants</Link>
          </Tabs.TabsItem>
          <Tabs.TabsItem>
            <Link href="/c/bookmark">About</Link>
          </Tabs.TabsItem>
        </Tabs>
        <div className="mt-5 space-y-4">
          <Alert type="info">
            <div className="mb-2 font-semibold">
              <RiVolumeVibrateFill /> Announcement
            </div>
            <p className="lg:text-sm">
              Remidi akan dilakukan pada hari Rabu 5 Agustus 2021. Semua siswa
              diharapkan mengecek nilai tugas 5 &quot;Kalimat Induktif&quot;
              pada kolom Penugasan.
            </p>
          </Alert>
        </div>
      </PageLayout.Main>
      <PageLayout.RightBar>haha</PageLayout.RightBar>
    </PageLayout>
  )
}

export default Class
