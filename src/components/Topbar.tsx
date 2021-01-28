import React from 'react'
import { RiChat1Fill, RiNotification3Fill } from 'react-icons/ri'
import Avatar from './Avatar'
import SearchField from './SearchField'
import DropDown from './Dropdown'
import TopNotificationMenu from './TopNotificationMenu'
import TopInboxMenu from './TopInboxMenu'
import TopProfileMenu from './TopProfileMenu'

const Topbar = () => {
  return (
    <div
      id="topNav"
      className="w-full p-6 flex flex-col-reverse lg:flex-row lg:py-8 lg:px-16 lg:justify-between items-center"
    >
      <div className="w-full lg:w-8/12 lg:pr-12">
        <SearchField placeholder="Search class ..." />
      </div>
      <div className="w-full flex justify-between items-center mb-4 lg:w-auto lg:mb-0">
        <div id="logo" className="lg:hidden">
          <h1 className="font-bold text-2xl">
            <span>Elisa</span>
            <span className="text-pink-500">.id</span>
          </h1>
        </div>
        <ul className="flex space-x-5 items-center">
          <li>
            <DropDown content={<TopNotificationMenu />} wrapperClassName="w-10/12 lg:w-108">
              <button className="relative w-12 h-12 flex items-center bg-gray-200 dark:bg-dark-800 rounded-full justify-center">
                <RiNotification3Fill className="text-xl text-gray-700 dark:text-gray-400" />
                <span className="absolute -top-1 -right-1 bg-red-500 w-5 h-5 text-xs rounded-full text-white flex items-center justify-center font-mono">
                  2
                </span>
              </button>
            </DropDown>
          </li>
          <li className="hidden lg:block">
            <DropDown content={<TopInboxMenu />} wrapperClassName="w-10/12 lg:w-108">
              <button className="relative w-12 h-12 flex items-center bg-gray-200 dark:bg-dark-800 rounded-full justify-center">
                <RiChat1Fill className="text-xl text-gray-700 dark:text-gray-400" />
                <span className="absolute -top-1 -right-1 bg-red-500 w-5 h-5 text-xs rounded-full text-white flex items-center justify-center font-mono">
                  3
                </span>
              </button>
            </DropDown>
          </li>
          <li>
            <DropDown content={<TopProfileMenu />} wrapperClassName="w-10/12 lg:w-80">
              <button className="rounded-full">
                <Avatar
                  url="https://uifaces.co/our-content/donated/Square__small_.jpg"
                  onlineStatus="active"
                />
              </button>
            </DropDown>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Topbar
