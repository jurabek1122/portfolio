import React, { useState } from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='navbar1'>
            <div className='container'>
                <div  style={{
                    display: 'block'
                }}>
                    <Navbar  light expand="md">
                        <NavbarBrand className='logo' href="/">JURABEK</NavbarBrand>
                        <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="links" navbar>
                                <NavItem>
                                    <NavLink className="link" href="#home">HOME</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="link" href="#projects">PORTFOLIO</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="link" href="#contacts">CONTACT</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div >
            </div>
        </div>
        
    );
};

export default Header;