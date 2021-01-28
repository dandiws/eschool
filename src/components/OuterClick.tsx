import React, { ReactNode } from 'react'
import useOuterClick, { clickHandlerType } from '../hooks/useOuterClick'

interface OuterClickProps {
  onOuterClick: clickHandlerType
  children?: ReactNode
}

const OuterClick = ({ onOuterClick, children }: OuterClickProps) => {
  const outerClickRef = useOuterClick<HTMLDivElement>(onOuterClick)
  return <div ref={outerClickRef}>{children}</div>
}

export default OuterClick
