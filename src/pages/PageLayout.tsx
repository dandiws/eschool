import React from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

interface PageLayoutProps {
  children?: React.ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="lg:flex">
      <Sidebar />
      <div
        id="mainWrapper"
        className="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible">
        <Topbar />
        <div className="px-6 lg:px-16 lg:flex pb-12 w-full lg:space-x-16">
          {children}
        </div>
      </div>
    </div>
  )
}

export const Main = (props: { children: React.ReactNode }) => {
  return <div className="w-full">{props.children}</div>
}

export const RightBar = (props: { children: React.ReactNode }) => {
  return (
    <div id="rightBar" className="sticky top-12 w-full lg:w-1/2" {...props} />
  )
}

PageLayout.Main = Main
PageLayout.RightBar = RightBar

export default PageLayout
