import { atom } from 'recoil'
import { createLocalStorageEffect } from './effects'
import { IAuthUser } from '../utils/types'

export type UserStateType = {
  authenticated: boolean
  data: IAuthUser | null
}

export const userAtom = atom<UserStateType>({
  key: 'auth',
  default: {
    authenticated: false,
    data: null
  },
  effects_UNSTABLE: [createLocalStorageEffect('authenticated_user')]
})
