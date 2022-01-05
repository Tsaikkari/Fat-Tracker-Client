import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useContext } from 'react'
import { AuthContext } from '../context/auth'

const Header = () => {
  const { isLoggedIn, logoutUser, user } = useContext(AuthContext)

  return (
    <Navbar bg='light' expand='lg' collapseOnSelect className='navbar'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          {isLoggedIn ? (
            <>
              <LinkContainer to='/week'>
                <Nav.Link>Week</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/chart'>
                <Nav.Link>Chart</Nav.Link>
              </LinkContainer>
              <NavDropdown title={user.name.split(' ')[0]} id='name'>
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
