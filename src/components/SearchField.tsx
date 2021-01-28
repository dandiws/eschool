import React from 'react'
import { RiSearchLine } from 'react-icons/ri'

interface SearchFieldProps {
  placeholder?: string
}
const SearchField = ({ placeholder }: SearchFieldProps) => {
  return (
    <div id="searchWrapper" className="w-full flex items-center relative">
      <input
        type="text"
        className="bg-white dark:bg-dark-800 w-full px-4 py-2 rounded border border-gray-200 dark:border-dark-800 outline-none text-gray-400"
        placeholder={placeholder}
      />
      <div className="absolute right-4 text-gray-400">
        <RiSearchLine />
      </div>
    </div>
  )
}

export default SearchField
