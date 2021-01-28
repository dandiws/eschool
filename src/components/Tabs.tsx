import React from 'react'

interface TabsProps {
  children: React.ReactNode
}

const Tabs = ({ ...props }: TabsProps) => {
  return (
    <div className="flex space-x-5 mt-4 text-gray-400 xl:text-sm" {...props} />
  )
}

interface TabItemProps {
  children?: React.ReactNode
  isActive?: boolean
}

const TabItem = ({ isActive = false, ...props }: TabItemProps) => {
  const activeTabClass =
    'border-b text-gray-900 border-gray-900 dark:text-white dark:border-white'
  return (
    <div className={isActive ? `py-2 ${activeTabClass}` : 'py-2'} {...props} />
  )
}

Tabs.TabsItem = TabItem

export default Tabs
