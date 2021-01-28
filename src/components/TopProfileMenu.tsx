import React from 'react'
import { RiAccountBoxLine, RiLogoutBoxLine } from 'react-icons/ri'
import { useTheme } from '../hooks/useTheme'
import Switch from './Switch'

const TopProfileMenu = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
    e.preventDefault()
  }

  return (
    <div className="w-full p-2 text-black dark:text-white lg:text-sm">
      <a className="dropdown-menu" href="#profile">
        <h1 className="mb-1">Dandi Wiratsangka</h1>
        <span className="text-gray-500">See profile</span>
      </a>
      <hr className="my-3 mx-4 dark:border-dark-800" />
      <a
        onClick={toggleTheme}
        className="dropdown-menu"
        href="#settings/account"
      >
        <Switch checked={theme === 'dark'} readonly>
          <span>Dark Mode</span>
        </Switch>
      </a>
      <hr className="my-3 mx-4 dark:border-dark-800" />
      <a className="dropdown-menu space-x-3" href="#settings/account">
        <RiAccountBoxLine /> <span>Account Settings</span>
      </a>
      <a className="dropdown-menu space-x-3" href="#logout">
        <RiLogoutBoxLine /> <span>Sign Out</span>
      </a>
    </div>
  )
}

export default TopProfileMenu
