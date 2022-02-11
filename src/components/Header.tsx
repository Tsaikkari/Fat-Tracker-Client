import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../redux/types'
import { getUserWeeksRequest } from '../redux/actions/weeks'
import LocalStorage from '../local-storage'

const Header = () => {
  const { isLoggedIn, userInfo } = useSelector((state: AppState) => state.auth)
  const name = userInfo.name
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleWeeks = () => {
    dispatch(getUserWeeksRequest())
  }

  const handleLogout = () => {
    LocalStorage.removeToken()
    navigate('/')
  }

  return (
    <Navbar bg='light' expand='lg' collapseOnSelect className='navbar'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          {isLoggedIn ? (
            <>
              <LinkContainer to='/weeks'>
                <Nav.Link onClick={handleWeeks}>Week</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/charts'>
                <Nav.Link>Chart</Nav.Link>
              </LinkContainer>
              <NavDropdown title={name && name.split(' ')[0]} id='name'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <div className='nav-not-signedin'>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Login
                </Nav.Link>
              </LinkContainer>
            </div>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
