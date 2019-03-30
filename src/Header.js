import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
//   NavbarBrand,
  Nav,
  NavItem,
  NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem 
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
                {/* <NavbarBrand 
                    // onClick={()=>this.getTheNumber()}
                    // href={brandUrl}
                    // target="_blank"
                    >
                    Alan Houston
                </NavbarBrand> */}
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
                        <NavLink style={navStyle} href="">Contact</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to="/Resume" style={navStyle}>Resume</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to="/ACA" style={navStyle}>ACA</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to="/Contact" style={navStyle}>Contact</Link></NavLink>
                    </NavItem>
                    {/*<UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                        Options
                        </DropdownToggle>
                        <DropdownMenu right>
                        <DropdownItem>
                            Option 1
                        </DropdownItem>
                        <DropdownItem>
                            Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            Reset
                        </DropdownItem>
                        </DropdownMenu> 
                    </UncontrolledDropdown>*/}
                    </Nav>
                </Collapse>
                </Navbar>
            </div>
        );
    }
}
