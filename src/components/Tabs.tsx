import React from 'react'

interface TabsProps {
  children: React.ReactNode
}

const Tabs = ({ ...props }: TabsProps) => {
  return (
    <div
      className="flex mt-4 text-gray-400 xl:text-sm sticky top-0 z-10 border-b bg-gray-100 dark:bg-dark-900 dark:border-dark-700"
      {...props}
    />
  )
}

interface TabItemProps {
  children?: React.ReactNode
  isActive?: boolean
}

const TabItem = ({ isActive = false, ...props }: TabItemProps) => {
  return (
    <div
      className={`py-4 px-4 ${
        isActive ? ' border-b border-black dark:border-white' : ''
      }`}
      style={{ marginBottom: -1 }}
      {...props}
    />
  )
}

Tabs.TabsItem = TabItem

export default Tabs
