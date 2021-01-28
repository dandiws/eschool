import React from 'react'

interface SwitchProps {
  children: React.ReactNode
  onChange?: React.ChangeEventHandler
  checked?: boolean
  readonly?: boolean
}

const Switch = ({ children, onChange, readonly = false, checked = false }: SwitchProps) => {
  return (
    <label htmlFor="toogleA" className="flex items-center cursor-pointer space-x-3">
      <div className="relative">
        <input
          checked={checked}
          onChange={onChange}
          id="toogleA"
          type="checkbox"
          className="hidden"
          readOnly
        />
        <div className="w-10 h-5 bg-gray-300 rounded-full shadow-inner"></div>
        <div className="switch__dot absolute w-5 h-5 bg-white rounded-full shadow left-0 top-0"></div>
      </div>
      {children}
    </label>
  )
}

export default Switch
