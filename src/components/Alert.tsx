import React from 'react'
import { RiCloseFill } from 'react-icons/ri'

type ColorStateType = 'info' | 'success' | 'warning' | 'danger'

interface AlertProps {
  children? : React.ReactNode
  type: ColorStateType
  dismissable?:boolean
  onDissmis?: React.MouseEventHandler
}

const getAlertTypeClassName = (type:ColorStateType)=>{
  const alertTypeClassName = {
    success: 'bg-green-500 bg-opacity-20 dark:bg-opacity-10 text-green-800 dark:text-green-400',
    info: 'bg-indigo-500 bg-opacity-20 dark:bg-opacity-10 text-indigo-800 dark:text-indigo-400',
    warning: 'bg-yellow-500 bg-opacity-20 dark:bg-opacity-10 text-yellow-800 dark:text-yellow-400',
    danger: 'bg-red-500 bg-opacity-20 dark:bg-opacity-10 text-red-800 dark:text-red-400',
  }

  return alertTypeClassName[type] || ''
}

const Alert = ({children,type,dismissable,onDissmis}:AlertProps) => {
  return <div className={`py-4 px-5 rounded-lg ${dismissable ? 'relative' : ''} ${getAlertTypeClassName(type)}`}>
    {
      dismissable && <button onClick={onDissmis} className="absolute right-5 top-4 w-6 h-6 focus:ring-0">
        <RiCloseFill />
      </button>
    }
    {children}
  </div>
}

export default Alert