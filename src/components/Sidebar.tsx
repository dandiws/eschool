import React from 'react'
import {
  RiBook3Line,
  RiCalendar2Line,
  RiInboxLine,
  RiSettings2Line,
  RiTaskLine
} from 'react-icons/ri'
import { Link } from 'wouter'
import { APP_TITLE } from '../utils/constants'

const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className="hidden fixed w-full z-20 bg-white dark:bg-dark-800 lg:block lg:static lg:w-72 lg:z-0">
      <div
        id="navWrapper"
        className="block px-10 py-11 lg:sticky lg:h-screen top-0">
        <nav>
          <div id="logo" className="mb-10 flex justify-center">
            <strong className="text-2xl">
              <span className="text-indigo-500">{APP_TITLE}</span>
            </strong>
          </div>
          <ul className="space-y-6 text-gray-500 dark:text-gray-400 text-sm">
            <li className="text-gray-900 dark:text-white">
              <Link href="/" className="space-x-3">
                <RiBook3Line />
                <span>Classes</span>
              </Link>
            </li>
            <li>
              <Link href="/assignments" className="space-x-3">
                <RiTaskLine />
                <span>Assignments</span>
              </Link>
            </li>
            <li>
              <Link href="/calendar" className="space-x-3">
                <RiCalendar2Line />
                <span>Calendar</span>
              </Link>
            </li>
            <li>
              <Link href="/inbox" className="space-x-3">
                <RiInboxLine />
                <span>Inbox</span>
              </Link>
            </li>
            <li>
              <Link href="/settings" className="space-x-3">
                <RiSettings2Line />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
