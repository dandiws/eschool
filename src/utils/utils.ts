import { APP_TITLE } from './constants'

export const createTitle = (title?: string) => {
  return title ? `${title} - ${APP_TITLE}` : APP_TITLE
}
