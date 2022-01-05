import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import { AuthProviderWrapper } from './context/auth'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/index.css'

ReactDOM.render(
  <Router>
    <AuthProviderWrapper>
      <App />
    </AuthProviderWrapper>
  </Router>, 
  document.getElementById('root')
)
