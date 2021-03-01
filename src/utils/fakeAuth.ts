import { IAuthUser } from './types'

export const auth = {
  login: (username: string, password: string) => {
    return new Promise<IAuthUser>((resolve, reject) => {
      setTimeout(() => {
        if (username !== 'user' || password !== 'secret') {
          reject(new Error('Invalid username or password'))
        } else {
          resolve({
            username,
            name: 'John Doe',
            sex: 'M',
            age: 21
          })
        }
      }, 1000)
    })
  }
}
