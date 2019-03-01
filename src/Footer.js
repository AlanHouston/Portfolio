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

export default class Footer extends React.Component {
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
            <div>
                <Navbar id="theNav" light expand="md" postion="bottom">
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
                    <NavItem>
                        {/* <NavLink style={navStyle} href="https://github.com/AlanHouston" target="_blank">GitHub</NavLink> */}
                        <NavLink style={navStyle} >&copy; 2019 Alan Houston</NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink style={navStyle} href="https://linkedin.com/in/alan-houston-austin/" target="_blank">LinkedIn</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={navStyle} href="" target="_blank">Contact</NavLink>
                    </NavItem> */}
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
