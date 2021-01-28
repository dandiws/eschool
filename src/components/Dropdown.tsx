import React, { ReactNode, useState } from 'react'
import { usePopper } from 'react-popper'
import useOuterClick from '../hooks/useOuterClick'
import usePortal from '../hooks/usePortal'

interface DropdownProps {
  children?: ReactNode
  content?: ReactNode
  wrapperClassName?: string
  outerMargin?: number
}

const DropDown = ({ content, children, wrapperClassName, outerMargin = 30 }: DropdownProps) => {
  const [visible, setVisible] = useState(false)
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null)

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: 'arrow', options: { element: arrowElement, padding: 5 } },
      {
        name: 'preventOverflow',
        options: {
          padding: outerMargin,
        },
      },
      {
        name: 'offset',
        options: {
          offset: [0, 15],
        },
      },
    ],
  })
  const createPortal = usePortal('#portal')
  const outerClickRef = useOuterClick<HTMLDivElement>((e) => {
    if (!referenceElement?.contains(e.target as Element)) {
      setVisible(false)
    }
  })

  return (
    <>
      <div onClick={() => setVisible((vis) => !vis)} ref={setReferenceElement}>
        {children}
      </div>
      {visible &&
        createPortal(
          <div ref={outerClickRef}>
            <div
              className={`popper bg-white dark:bg-dark-600 shadow-lg rounded-lg ${wrapperClassName}`}
              style={styles.popper}
              {...attributes.popper}
              ref={setPopperElement}
            >
              {content}
              <div className="popper-arrow" ref={setArrowElement} style={styles.arrow}></div>
            </div>
          </div>
        )}
    </>
  )
}

export default DropDown
