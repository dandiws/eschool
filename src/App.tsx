import React from 'react'
import { ThemeProvider } from './hooks/useTheme'
import { Redirect, Route, Switch } from 'wouter'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'
import { RecoilRoot } from 'recoil'
import Classes from './components/classes'
import Inbox from './pages/Inbox'
import Class from './pages/Class'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider>
            <Switch>
              <Route path="/login" component={Login} />
              <PrivateRoute path="/">
                <Redirect to="/classes" />
              </PrivateRoute>
              <PrivateRoute path="/classes/:slug">
                {params => <Class slug={params.slug} />}
              </PrivateRoute>
              <PrivateRoute path="/classes">
                <Classes />
              </PrivateRoute>
              <PrivateRoute path="/inbox">
                <Inbox />
              </PrivateRoute>
              <Route path="/:else?">
                <h1>404 Not Found</h1>
              </Route>
            </Switch>
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </React.StrictMode>
  )
}

export default App
