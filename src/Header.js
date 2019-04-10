import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,Nav,NavItem,NavLink,
//NavbarBrand,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem 
} from 'reactstrap';
import {Link} from "react-router-dom";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false
        };
    }
    toggle() {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }
    render() { 
        
        const navStyle = {
            color: '#A3A9AA'
        }

        return (
            <div id="theNav">
                <Navbar expand="md" postion="top">
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavLink><Link to="/" style={navStyle}>Home</Link></NavLink>
                    <NavItem>
                        <NavLink style={navStyle} href="https://github.com/AlanHouston" target="_blank">GitHub</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={navStyle} href="https://linkedin.com/in/alan-houston-austin/" target="_blank">LinkedIn</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={navStyle} href="https://alanhouston.github.io/AlanHouston.pdf" target="_blank">Resume</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to="/ACA" style={navStyle}>ACA</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to="/Contact" style={navStyle}>Contact</Link></NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </div>
        );
    }
}
