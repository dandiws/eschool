import { MutableRefObject, useEffect, useRef } from 'react'

export type clickHandlerType = (ev: MouseEvent) => any

const useOuterClick = <T extends Element>(callback: clickHandlerType) => {
  const callbackRef = useRef<clickHandlerType>() // initialize mutable callback ref
  const innerRef = useRef<T>() // returned to client, who sets the "border" element

  // update callback on each render, so second useEffect has most recent callback
  useEffect(() => {
    callbackRef.current = callback
  })

  useEffect(() => {
    document.addEventListener('click', handleClick)
    console.log('mounted')
    return () => {
      console.log('unmounted')
      document.removeEventListener('click', handleClick)
    }

    function handleClick(e: MouseEvent) {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target as Element)
      )
        callbackRef.current(e)
    }
  }, []) // no dependencies -> stable click listener

  return innerRef as MutableRefObject<T>
}

export default useOuterClick
