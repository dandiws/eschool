import { AtomEffect, DefaultValue } from 'recoil'

export type EffectFactory = <T>(...args: any[]) => AtomEffect<T>

export const createLocalStorageEffect: EffectFactory = (key: string) => ({
  setSelf,
  onSet
}) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue))
  }
  onSet(newValue => {
    if (newValue instanceof DefaultValue) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(newValue))
    }
  })
}
