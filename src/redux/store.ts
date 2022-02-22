import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './saga'
import { AppState } from './types'

export const initState: AppState = {
  auth: {
    _id: '',
    email: '',
    password: '',
    name: '',
    isAdmin: false,
    lifeStyles: '',
    isLoggedIn: false,
    loading: true,
    error: undefined,
  },
  week: {
    date: '',
    weights: {
      currentWeight: '',
      goalWeight: '',
    },
    achievedWeight: '',
    loading: true,
    error: undefined,
  },
  weeks: {
    list: [],
  },
  fattyFood: {
    name: '',
    chosenDate: '',
    weekId: '',
  },
  sport: {
    sport: '',
    date: '',
    duration: '',
    weekId: '',
    error: undefined,
    loading: true
  },
}

export default function makeStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware()
  let composeEnhancer = compose

  const localState = localStorage.getItem('initState')
  localState && (initialState = JSON.parse(localState))

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const store = createStore(
    rootReducer(),
    // @ts-ignore
    initialState,
    composeEnhancer(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga)

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
