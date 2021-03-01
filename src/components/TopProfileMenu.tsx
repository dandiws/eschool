import React from 'react'
import { RiAccountBoxLine, RiLogoutBoxLine } from 'react-icons/ri'
import { useTheme } from '../hooks/useTheme'
import Switch from './Switch'
import { userAtom } from '../recoil/atoms'
import { useRecoilState } from 'recoil'

const TopProfileMenu = () => {
  const [user, setUser] = useRecoilState(userAtom)
  const { theme, setTheme } = useTheme()

  const doLogout = (e: any) => {
    e.preventDefault()
    setUser({
      authenticated: false,
      data: null
    })
  }

  const toggleTheme = (e: any) => {
    e.preventDefault()
    setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="w-full p-2 text-black dark:text-white lg:text-sm">
      <a className="dropdown-menu" href="#profile">
        <h1 className="mb-1">{user.data?.name}</h1>
        <span className="text-gray-500">See profile</span>
      </a>
      <hr className="my-3 mx-4 dark:border-dark-800" />
      <a
        onClick={toggleTheme}
        className="dropdown-menu"
        href="#settings/account">
        <Switch checked={theme === 'dark'} readonly>
          <span>Dark Mode</span>
        </Switch>
      </a>
      <hr className="my-3 mx-4 dark:border-dark-800" />
      <a className="dropdown-menu space-x-3" href="#settings/account">
        <RiAccountBoxLine /> <span>Account Settings</span>
      </a>
      <a className="dropdown-menu space-x-3" href="#logout" onClick={doLogout}>
        <RiLogoutBoxLine /> <span>Sign Out</span>
      </a>
    </div>
  )
}

export default TopProfileMenu
