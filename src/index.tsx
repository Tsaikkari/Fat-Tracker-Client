import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/index.css'

import App from './App'
import makeStore from './redux/store'
import LocalStorage from './local-storage'
axios.defaults.baseURL = 'http://localhost:5000/api'

const store = makeStore()

axios.interceptors.request.use((config: any) => {
  const token = LocalStorage.getToken()
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)
