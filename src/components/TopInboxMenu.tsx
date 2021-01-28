import React from "react"
import Avatar from "./Avatar"

const TopInboxMenu = () => {
  return (
    <div className="w-full lg:text-sm">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-dark-800">
        <h2>Inbox</h2>
      </div>
      <div className="max-h-80 overflow-y-auto">
        <a href="#" className="dropdown-menu py-4 flex">
          <Avatar onlineStatus="active" />
          <div className="ml-3 mr-2">
            <h3>Murdock M</h3>
            <span className="text-gray-900 font-medium  dark:text-gray-300">You have a new message!</span>
          </div>
          <small className="whitespace-nowrap ml-auto text-gray-500">2 min ago</small>
        </a>
        <a href="#" className="dropdown-menu py-4 flex">
          <Avatar />
          <div className="ml-3 mr-2">
            <h3>Nelson F</h3>
            <span className="text-gray-500">You: Ok thanks!</span>
          </div>
          <small className="whitespace-nowrap ml-auto text-gray-500">3 days ago</small>
        </a>
      </div>
      <div className="px-4 py-4 border-t border-gray-200 dark:border-dark-800 flex justify-end space-x-2 text-sm lg:text-xs text-gray-500">
        <a href="/inbox">See all messages</a>
      </div>
    </div>
  )
}

export default TopInboxMenu