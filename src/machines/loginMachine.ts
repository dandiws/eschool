import { Machine, assign, interpret } from 'xstate'
import { auth } from '../utils/fakeAuth'

type MachineContext = {
  error?: string
  user: {}
}

export enum Actions {
  LOGIN = 'LOGIN'
}

export enum States {
  loggedOut = 'loggedOut',
  loggedIn = 'loggedIn',
  loggingIn = 'loggingIn'
}

const context: MachineContext = {
  user: {
    authenticated: false,
    data: {} as AuthUser
  }
}

export const appMachine = Machine({
  initial: States.loggedOut,
  context: context,
  states: {
    [States.loggedOut]: {
      on: {
        [Actions.LOGIN]: `${States.loggingIn}.loading`
      }
    },
    [States.loggingIn]: {
      states: {
        loading: {
          invoke: {
            src: (_ctx, event) => {
              return auth.login(event.username, event.password)
            },
            onDone: {
              target: '#' + States.loggedIn,
              actions: assign({
                user: (_ctx: MachineContext, event) => ({
                  authenticated: true,
                  data: event.data
                })
              })
            },
            onError: {
              target: 'error',
              actions: assign({
                error: (_ctx: MachineContext, event) => event.data.message
              })
            }
          }
        },
        error: {
          on: {
            [Actions.LOGIN]: 'loading'
          }
        }
      }
    },
    [States.loggedIn]: {
      id: States.loggedIn
    }
  }
})

export const appService = interpret(appMachine)
appService.start()
