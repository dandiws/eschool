import React, { FormEvent, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery, QueryFunction } from 'react-query'
import { useRecoilState } from 'recoil'
import { useLocation } from 'wouter'
import { IAuthUser } from '~utils/types'
import { userAtom } from '../recoil/atoms'
import { auth } from '../utils/fakeAuth'

// eslint-disable-next-line react/display-name
const Input = React.forwardRef(({ error, ...props }: any, ref: any) => {
  return (
    <>
      <div>
        <input ref={ref} {...props} />
      </div>
      <div className="mt-2 text-red-500">{error && error.message}</div>
    </>
  )
})

const Login = () => {
  const [, goTo] = useLocation()
  const { register, handleSubmit, errors, watch } = useForm({
    mode: 'onBlur'
  })
  const username = watch('username')
  const password = watch('password')

  const [, setUser] = useRecoilState(userAtom)
  const login = useQuery(
    ['login', { username, password }],
    () => auth.login(username, password),
    {
      enabled: false,
      retry: false
    }
  )

  const doLogin = () => {
    login.refetch().then(res => {
      if (res.isSuccess) {
        setUser({
          authenticated: true,
          data: (res.data as IAuthUser) ?? null
        })
        goTo('/')
      }
    })
  }

  return (
    <div className="grid place-items-center h-screen">
      <div className="-mt-6">
        <h1 className="text-2xl mb-2">Welcome back!</h1>
        <p className="text-gray-500 mb-8">Login to continue</p>
        <div className="text-red-500 mb-4">
          {login.isError && (login.error as any).message}
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(doLogin)}>
          <div>
            <Input
              name="username"
              ref={register({ required: 'Username is required' })}
              type="text"
              className="px-4 py-2 rounded"
              placeholder="Username"
              defaultValue="user"
              autoComplete="username"
              error={errors.username}
            />
          </div>
          <div>
            <Input
              name="password"
              ref={register({ required: 'Password is required' })}
              type="password"
              className="px-4 py-2 rounded"
              placeholder="Password"
              defaultValue="secret"
              autoComplete="current-password"
              error={errors.password}
            />
          </div>
          <div>
            <button
              className="btn btn-primary w-full"
              type="submit"
              disabled={login.isFetching}>
              {login.isFetching ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
