import React from 'react'

interface PageLayoutProps {
  children?: React.ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="px-6 lg:px-16 lg:flex pb-12 w-full space-x-8">
      {children}
    </div>
  )
}

export const Main = (props: any) => {
  return <div className="w-full">{props.children}</div>
}

export const RightBar = (props: any) => {
  return (
    <div id="rightBar" className="sticky top-12 w-full lg:w-1/2" {...props} />
  )
}

PageLayout.Main = Main
PageLayout.RightBar = RightBar

export default PageLayout
