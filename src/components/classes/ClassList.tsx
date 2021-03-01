import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ClassItem, { ClassItemProps } from './ClassItem'
import { Class } from '../../utils/types'

export interface ClassListProp {
  classes: Class[]
  onBookmarkClick?: (slug: string) => any
}

const ClassList = ({ classes, onBookmarkClick }: ClassListProp) => {
  return (
    <div className="space-y-5">
      {classes.map(eclass => (
        <ClassItem
          key={eclass.slug}
          eclass={eclass}
          onBookmarkClick={() => {
            if (onBookmarkClick) {
              onBookmarkClick(eclass.slug)
            }
          }}
        />
      ))}
    </div>
  )
}

export default ClassList
