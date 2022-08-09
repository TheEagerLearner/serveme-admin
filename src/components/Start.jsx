import React,{useState} from "react";

import {CNavbar,CContainer,CNavbarBrand,CNavbarToggler,CCollapse,CNavItem,CNavLink,CNavbarNav} from '@coreui/react';


import '@coreui/coreui/dist/css/coreui.min.css'
import "bootstrap/dist/css/bootstrap.min.css";

import './../myStyles.css';

const Start = () => {

    const [visible, setVisible] = useState(false);

    return(
   
            <CNavbar expand="sm" colorScheme="dark" className="start" >

                <CContainer fluid>

                <CNavbarBrand href="#">Navbar</CNavbarBrand>

                <CNavbarToggler
                    aria-label="Toggle navigation"
                    aria-expanded={visible}
                    onClick={() => setVisible(!visible)}

                />

                <CCollapse className="navbar-collapse" visible={visible}>

                <CNavbarNav className="menuItems">

                <CNavItem>

                    <CNavLink className="text" href="#" active>Home</CNavLink>

                </CNavItem>

                <CNavItem>

                    <CNavLink className="text" href="#">Features</CNavLink>

                </CNavItem>

                <CNavItem>

                    <CNavLink className="text" href="#">Pricing</CNavLink>

                </CNavItem>
                </CNavbarNav>

            </CCollapse>

            </CContainer>

            </CNavbar>

    );
}

export default Start;