import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/index.css'

import App from './App'
import Root from './Root'
import LocalStorage from './local-storage'
axios.defaults.baseURL = 'http://localhost:5000/api'

axios.interceptors.request.use((config: any) => {
  const token = LocalStorage.getToken()
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

ReactDOM.render(
  <Router>
    <Root>
      <App />
    </Root>
  </Router>,
  document.getElementById('root')
)
