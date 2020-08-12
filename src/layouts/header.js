import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/styles/header.scss"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <React.Fragment>
            <Navbar expand="md" className="header">
            <NavbarBrand href="/">YOGIE ARIFIN PRAJA ERSA PUTRA</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Repository
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem href="https://gitlab.com/yogiearifin">
                    Gitlab
                    </DropdownItem>
                    <DropdownItem href="https://github.com/yogiearifin">
                    Github
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            <NavbarText>
                <Button href="https://drive.google.com/uc?export=download&id=16yrAR0iA2fNwjAy1B3wQl1WZxKMDKHph">
                    Resume
                </Button>
            </NavbarText>
            </Collapse>
        </Navbar>
      </React.Fragment>
    )
}

export default Header;