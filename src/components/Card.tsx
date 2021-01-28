import React, { ReactNode } from 'react'

interface GenericProps {
  className?: string
  children?: ReactNode
}

interface CardProps extends GenericProps {}

const Card = ({ className, ...props }: CardProps) => {
  return (
    <div
      className={`bg-white dark:bg-dark-800 rounded ${className}`}
      {...props}
    />
  )
}

export const CardHeader = ({ className, ...props }: GenericProps) => {
  return (
    <div
      className={`px-6 py-4 border-b border-gray-200 dark:border-dark-500 ${className}`}
      {...props}
    />
  )
}

export const CardFooter = ({ className, ...props }: GenericProps) => {
  return (
    <div
      className={`px-6 py-4 border-t border-gray-200 dark:border-dark-500 ${className}`}
      {...props}
    />
  )
}

Card.CardHeader = CardHeader
Card.CardFooter = CardFooter

export default Card
