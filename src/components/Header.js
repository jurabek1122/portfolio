import React, { useState } from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='navbar1'>
            <div className='container'>
                <div  style={{
                    display: 'block'
                }}>
                    <Navbar  light expand="md">
                        <Link className='logo' to="/">JURABEK</Link>
                        <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="links" navbar>
                                <NavItem>
                                    <NavLink className="link" to="/" onClick={() => { setIsOpen(!isOpen) }}>HOME</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="link" to="portfolio" onClick={() => { setIsOpen(!isOpen) }}>PORTFOLIO</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="link" to="contact" onClick={() => { setIsOpen(!isOpen) }}>CONTACT</NavLink>
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