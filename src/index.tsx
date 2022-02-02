import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { AuthProviderWrapper } from './context/auth'
import { WeekProviderWrapper } from './context/week'
import { WeightProviderWrapper } from './context/weight'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/index.css'

ReactDOM.render(
  <Router>
    <AuthProviderWrapper>
      <WeekProviderWrapper>
        <WeightProviderWrapper>
          <App />
        </WeightProviderWrapper>
      </WeekProviderWrapper>
    </AuthProviderWrapper>
  </Router>,
  document.getElementById('root')
)
