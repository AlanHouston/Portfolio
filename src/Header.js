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

class Header extends React.Component {
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
        // let brandUrl = null;
        // if(this.state.theNumber > 0 && this.state.theNumber < 1){
        //     debugger;
        //     brandUrl = 'https://www.youtube.com/watch?v=MFOQJdAO8Lw';
        //     // backwards cruise
        // } 
        // else if(this.state.theNumber > 1 && this.state.theNumber < 2){
        //     debugger;
        //     brandUrl = 'https://vimeo.com/38846947';
        //     //tommy the cat
        //     //vimeo cuz no ads :(
        // } 
        // if(this.state.theNumber > 2 && this.state.theNumber < 3){
        //     debugger;
        //     brandUrl = 'https://www.youtube.com/watch?v=QHmH1xQ2Pf4';
        //     // land of confusion
        // } 
        // if(this.state.theNumber > 3 && this.state.theNumber < 4){
        //     debugger;
        //     brandUrl = 'https://vimeo.com/304670617';
        //     //skibidi
        // } 

        const navStyle = {
            color: '#F7F4F3'
        }

        return (
            <div>
                <Navbar id="theNav" light expand="md" postion="top">
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
                        <NavLink style={navStyle} href="https://github.com/AlanHouston" target="_blank">GitHub</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={navStyle} href="https://linkedin.com/in/alan-houston-austin/" target="_blank">LinkedIn</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={navStyle} href="" target="_blank">Resume</NavLink>
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

export default Header;