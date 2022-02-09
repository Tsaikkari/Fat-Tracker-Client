import React, { useEffect } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useContext } from 'react'
import { AuthContext } from '../context/auth'
import { AppState } from '../redux/types'

const Header = () => {
  const { isLoggedIn, userInfo } = useSelector((state: AppState) => state.auth)

  // TODO: logout, weeks, weights
  const { logoutUser } = useContext(AuthContext)

  // useEffect(() => {
  //   if (isLoggedIn && weeks.length === 0) {
  //     getWeeks()
  //   }
  // }, [weeks, getWeeks, isLoggedIn])

  // useEffect(() => {
  //   if (isLoggedIn && weights.length === 0) {
  //     getWeights()
  //   }
  // }, [weights, getWeights, isLoggedIn])

  return (
    <Navbar bg='light' expand='lg' collapseOnSelect className='navbar'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          {isLoggedIn ? (
            <>
              <LinkContainer to='/weeks'>
                <Nav.Link>Week</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/charts'>
                <Nav.Link>Chart</Nav.Link>
              </LinkContainer>
              <NavDropdown title={userInfo.name.split(' ')[0]} id='name'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutUser}>Logout</NavDropdown.Item>
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
