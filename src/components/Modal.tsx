import React, { ReactNode } from 'react'
import usePortal from '../hooks/usePortal'

interface ModalProps {
  visible?: boolean
  children?: ReactNode
  title?: string
}

const Modal = ({ visible = false, children, title }: ModalProps) => {
  const createPortal = usePortal('#portal')

  return visible
    ? createPortal(
        <div className="fixed right-0 left-0 top-0 bottom-0 p-6 bg-dark-900 bg-opacity-50 dark:bg-white dark:bg-opacity-10 grid place-items-center z-50">
          <div className="w-full lg:w-auto lg:max-w-screen-sm bg-white dark:bg-dark-800 rounded-lg p-8">
            {title && (
              <div className="mb-5">
                <h3>{title}</h3>
              </div>
            )}
            {children}
          </div>
        </div>
      )
    : null
}

export default Modal
