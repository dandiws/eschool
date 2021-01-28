import React from 'react'
import { ThemeProvider } from './hooks/useTheme'
import Sidebar from './components/Sidebar'
import Classes from './pages/Classes'
import Topbar from './components/Topbar'
import { Redirect, Route, Switch } from 'wouter'
import Inbox from './pages/Inbox'
import Class from './pages/Class'

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <div className="lg:flex">
          <Sidebar />
          <div
            id="mainWrapper"
            className="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible">
            <Topbar />
            <Switch>
              <Route path="/">
                <Redirect to="/c/today" />
              </Route>
              <Route path="/c/s/:slug">
                {params => <Class slug={params.slug} />}
              </Route>
              <Route path="/c/:type">
                <Classes />
              </Route>
              <Route path="/inbox">
                <Inbox />
              </Route>
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    </React.StrictMode>
  )
}

export default App
