import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createPortal as RcreatePortal } from 'react-dom'

const usePortal = (selectorOrElement: string | Element) => {
  const [targetEl, setTargetEl] = useState<HTMLDivElement>()

  useEffect(() => {
    const root =
      typeof selectorOrElement === 'string'
        ? document.querySelector(selectorOrElement)
        : selectorOrElement
    const el = document.createElement('div')
    root?.appendChild(el)
    setTargetEl(el)
  }, [selectorOrElement])

  const createPortal = useCallback(
    (children: ReactNode) =>
      targetEl ? RcreatePortal(children, targetEl!) : null,
    [targetEl]
  )

  return createPortal
}

export default usePortal
