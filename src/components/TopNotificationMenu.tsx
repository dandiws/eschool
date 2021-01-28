import React from 'react'
import Avatar from './Avatar'

const TopNotificationMenu = () => {
  return (
    <div className="w-full lg:text-sm">
      <div className="px-4 py-4 border-b border-gray-200 dark:border-dark-800">
        <h2>Notifications</h2>
      </div>
      <div className="max-h-80 overflow-y-auto">
        <a href="#" className="dropdown-menu py-4 flex">
          <Avatar shape="round" />
          <div className="ml-3 mr-2">
            <h3>Mathematics</h3>
            <span className="text-gray-700 dark:text-gray-400">
              You have a new assignment
            </span>
          </div>
          <small className="whitespace-nowrap ml-auto text-gray-500">
            2 min ago
          </small>
        </a>
        <a href="#" className="dropdown-menu py-4 flex">
          <Avatar shape="round" />
          <div className="ml-3 mr-2">
            <h3>Social Science</h3>
            <span className="text-gray-700 dark:text-gray-400">
              Your assignment has been graded
            </span>
          </div>
          <small className="whitespace-nowrap ml-auto text-gray-500">
            3 days ago
          </small>
        </a>
      </div>
      <div className="px-4 py-4 border-t border-gray-200 dark:border-dark-800 flex justify-end space-x-2 text-sm lg:text-xs text-gray-500">
        <a href="/settings/notification">Notification Settings</a>
        <span>•</span>
        <button>Mark all as read</button>
      </div>
    </div>
  )
}

export default TopNotificationMenu
