import React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color='faded' light toggleable>
          <NavbarBrand>SW Designs</NavbarBrand>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href="">Home</NavLink>
                <NavLink href="">PlayList</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    )
  }
}
