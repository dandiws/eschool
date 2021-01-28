import { ConfigType } from 'dayjs'

export interface People {
  name: string
  sex: 'M' | 'F'
  birthPlace?: string
  birthDate?: string
}

export interface Student extends People {}

export interface Teacher extends People {
  title: 'mr' | 'mrs' | 'ms'
  degree?: string
}

export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6

export interface BussinessHour {
  day: DayOfWeek
  startTime: ConfigType
  endTime: ConfigType
}

export interface Class {
  name: string
  slug: string
  teachers: Teacher[]
  students?: Student[]
  schedules: BussinessHour[]
  meetUrl?: string
  isBookmarked?: boolean
}
