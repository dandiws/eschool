import React from 'react'
import {
  RiArrowRightSLine,
  RiBookmarkFill,
  RiBookmarkLine,
  RiCheckboxBlankCircleFill,
  RiFlag2Fill,
  RiFlag2Line,
  RiFlagLine,
  RiMoreFill,
  RiShareBoxLine,
  RiShareLine,
  RiTimeFill,
  RiTimeLine,
  RiUser2Fill,
  RiUser2Line,
  RiVidicon2Line,
  RiWalkLine,
} from 'react-icons/ri'
import dayjs, { ConfigType } from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import { Class } from '~utils/types'
import Card from './Card'
import Avatar from './Avatar'
import { Link } from 'wouter'
import DropDown from './Dropdown'
dayjs.extend(isBetween)

export interface ClassItemProps extends Class {
  onBookmarkClick?: React.MouseEventHandler
}

const CardItemActionMenu = () => {
  return (
    <div className="p-2 w-60 text-sm lg:w-48 lg:text-xs text-black dark:text-white">
      <a href="#" className="dropdown-menu block text-left space-x-2">
        <RiShareLine /> <span>Share</span>
      </a>
      <a href="#" className="dropdown-menu block text-left space-x-2">
        <RiFlag2Line /> <span>Report</span>
      </a>
      <hr className="my-2 border-gray-200 dark:border-dark-800" />
      <a href="#" className="dropdown-menu block text-left space-x-2 text-red text-red-400">
        <RiWalkLine /> <span>Leave Class</span>
      </a>
    </div>
  )
}

const ClassItem = ({
  name,
  schedules,
  slug,
  teachers,
  isBookmarked = false,
  meet_url,
  students,
  onBookmarkClick,
}: ClassItemProps) => {
  const isOnGoing =
    schedules
      .filter((s) => s.day === dayjs().day())
      .filter((s) => dayjs().isBetween(s.startTime, s.endTime)).length > 0
  const teachersName = teachers.map((t) => `${t.title} ${t.name} ${t.degree || ''}`)

  return (
    <Card>
      <Card.CardHeader className="flex justify-between items-center border-none pb-2">
        <h2>{name}</h2>
        <div className="flex items-center space-x-2">
        {
          isOnGoing && <span className="text-green-500 py-1 px-2 bg-green-100 dark:bg-green-900 rounded lg:text-xs">On Going</span>
        }
        <DropDown content={<CardItemActionMenu />}>
          <button className="focus:ring-0 text-dark-500 dark:text-gray-500 w-8 h-8 hover:bg-gray-100 dark:hover:bg-dark-600 rounded-full">
            <RiMoreFill /> <div className="sr-only">More</div>
          </button>
        </DropDown>
        </div>
      </Card.CardHeader>
      <div className="px-6 py-6 block space-y-6 lg:flex lg:space-y-0 text-dark-300 dark:text-gray-400 lg:text-sm">
        <div className="w-full lg:w-1/2">
          <div className="uppercase text-gray-400 dark:text-gray-600 font-medium lg:text-xs mb-3">
            <small>
              <RiUser2Fill /> Teachers
            </small>
          </div>
          <div className="space-y-2">
            {teachersName.map((name) => (
              <div>{name}</div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="uppercase text-gray-400 dark:text-gray-600 font-medium lg:text-xs mb-3">
            <small>
              <RiTimeFill /> Schedules
            </small>
          </div>
          <div className="space-y-2">
            {schedules.map((sc) => {
              return (
                <div>
                  {dayjs().day(sc.day).format('dddd')}, {dayjs(sc.startTime).format('HH:mm')} -{' '}
                  {dayjs(sc.endTime).format('HH:mm')}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Card.CardFooter className="block space-y-4 text-sm  text-dark-500 dark:text-gray-500 lg:flex lg:space-y-0 lg:justify-between lg:items-center lg:text-xs">
        <div className="flex items-center mr-3">
          <div className="flex justify-end flex-row-reverse">
            <div className="-ml-5">
              <Avatar size="small" />
            </div>
            <div className="-ml-5">
              <Avatar
                size="small"
                url="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
              />
            </div>
            <div>
              <Avatar size="small" url="https://uifaces.co/our-content/donated/N5PLzyan.jpg" />
            </div>
          </div>
          <span className="ml-3">45 other students is joined</span>
        </div>
        <div className="flex justify-around space-x-2 whitespace-nowrap">
          <button
            onClick={onBookmarkClick}
            className="px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-dark-600 focus:ring-0"
          >
            {isBookmarked ? <RiBookmarkFill /> : <RiBookmarkLine />} Bookmark
          </button>
          <Link
            href={`/c/s/${slug}`}
            className="px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-dark-600 focus:ring-0"
          >
            See Details <RiArrowRightSLine />
          </Link>
        </div>
      </Card.CardFooter>
    </Card>
  )
}

export default ClassItem
