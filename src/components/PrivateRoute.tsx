import React from 'react'
import { useRecoilValue } from 'recoil'
import { Redirect, Route, RouteProps } from 'wouter'
import { userAtom } from '../recoil/atoms'

const PrivateRoute = ({ children, ...props }: RouteProps) => {
  const user = useRecoilValue(userAtom)

  return (
    <Route {...props}>
      {user.authenticated ? children : <Redirect to="/login" />}
    </Route>
  )
}

export default PrivateRoute
