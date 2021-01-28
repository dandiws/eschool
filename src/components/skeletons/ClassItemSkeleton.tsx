import React from 'react'
import Card from '../Card'

const ClassItemSkeleton = () => {
  return (
    <Card>
      <Card.CardHeader className="flex justify-between items-center border-none pb-2">
        <div className="bg-gray-200 dark:bg-dark-700 w-1/2 h-6 rounded"></div>
        <div className="h-6 w-6 rounded bg-gray-200 dark:bg-dark-700"></div>
      </Card.CardHeader>
      <div className="px-6 py-6 flex space-x-4">
        <div className="rounded w-1/2 h-16 bg-gray-200 dark:bg-dark-700"></div>
        <div className="rounded w-1/2 h-16 bg-gray-200 dark:bg-dark-700"></div>
      </div>
      <Card.CardFooter className="block space-y-4 text-sm  text-dark-500 dark:text-gray-500 lg:flex lg:space-y-0 lg:justify-between lg:items-center lg:text-xs">
        <div className="flex items-center mr-3">
          <div className="flex justify-end flex-row-reverse">
            <div className="-ml-5">
              <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-dark-700"></div>
            </div>
            <div>
              <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-dark-600"></div>
            </div>
          </div>
          <div className="ml-3 h-6 w-24 bg-gray-200 dark:bg-dark-700 rounded"></div>
        </div>
        <div className="flex justify-around space-x-2 whitespace-nowrap">
          <div className="h-6 w-20 bg-gray-200 dark:bg-dark-700 rounded"></div>
          <div className="h-6 w-20 bg-gray-200 dark:bg-dark-700 rounded"></div>
        </div>
      </Card.CardFooter>
    </Card>
  )
}

export default ClassItemSkeleton
