import React from 'react'
import { Provider } from 'react-redux'

import makeStore from './redux/store'

const Root = (props: any) => {
  const store = makeStore()
  return (
    <Provider store={store}>{props.children}</Provider>
  )
}

export default Root