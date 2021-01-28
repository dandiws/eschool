import dayjs from "dayjs";
import { ClassItemProps } from "../components/ClassItem";

export let classesData: ClassItemProps[] = [
  {
    isBookmarked: false,
    slug: 'math',
    name: 'Mathematics',
    teachers: [
      {
        name: 'Lumban H',
        sex: 'M',
        title: 'mr',
      },
      {
        name: 'Atikah L',
        sex: 'F',
        title: 'mrs',
        degree: 'S.Pd',
      },
    ],
    schedules: [
      {
        day: 2,
        startTime: dayjs().hour(7),
        endTime: dayjs().hour(9),
      },
    ],
  },
  {
    isBookmarked: true,
    slug: 'indonesian',
    name: 'Indonesian Language & Literature',
    teachers: [
      {
        name: 'Juli J',
        sex: 'F',
        title: 'ms',
        degree: 'S.Pd',
      },
    ],
    schedules: [
      {
        day: 3,
        startTime: dayjs().hour(8),
        endTime: dayjs().hour(10),
      },
      {
        day: dayjs().day() as DayOfWeek,
        startTime: dayjs().subtract(1, 'h'),
        endTime: dayjs().add(1, 'h'),
      },
    ],
    meet_url: 'https://meet.google.com/random-room',
  },
  {
    isBookmarked: false,
    slug: 'religion',
    name: 'Religion',
    teachers: [
      {
        name: 'Rohmani',
        sex: 'M',
        title: 'mr',
        degree: 'M.Ag',
      },
    ],
    schedules: [
      {
        day: 0,
        startTime: dayjs().hour(12),
        endTime: dayjs().hour(13),
      },
    ],
  },
]