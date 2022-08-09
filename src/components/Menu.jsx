import React from "react";

import './../myStyles.css';

import {CSidebar,CSidebarBrand,CSidebarNav,CNavTitle,CNavItem,CNavGroup,CBadge,CSidebarToggler  } from '@coreui/react';

import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'

import '@coreui/coreui/dist/css/coreui.min.css'
import "bootstrap/dist/css/bootstrap.min.css";


const Menu = () => {

    return(
        
  <CSidebar className="menu">

  <CSidebarBrand>Sidebar Brand</CSidebarBrand>
  
  <CSidebarNav>
  
    
  
    <CNavItem href="#">
  
      <CIcon customClassName="nav-icon" icon={freeSet.cilHome} />
    
        Home
    
      </CNavItem>
  
    <CNavItem href="#">
  
      <CIcon customClassName="nav-icon" icon={freeSet.cilGraph} />
  
        Analytics
  
      <CBadge color="primary ms-auto">NEW</CBadge>
  
    </CNavItem>

    <CNavItem href="#">
  
      <CIcon customClassName="nav-icon" icon={freeSet.cilInfo} />
  
        About us
  
    </CNavItem>



    <CNavTitle>USERS</CNavTitle>
    
      <CNavItem href="#">

        <CIcon customClassName="nav-icon" icon={freeSet.cilUser} />

          Customer
    
      </CNavItem>

      <CNavItem href="#">
      
        <CIcon customClassName="nav-icon" icon={freeSet.cilUser} />
        
        Service Provider

      </CNavItem>

      <CNavItem href="#">

        <CIcon customClassName="nav-icon" icon={freeSet.cilMonitor} />
  
        Admin

      </CNavItem>

  
    

{/*   
    <CNavGroup toggler="Nav dropdown">
  
      <CNavItem href="#">
  
        <CIcon customClassName="nav-icon" icon={freeSet.cilPuzzle} /> Nav dropdown item
  
      </CNavItem>
  
      <CNavItem href="#">
  
        <CIcon customClassName="nav-icon" icon={freeSet.cilPuzzle} /> Nav dropdown item
  
      </CNavItem>
  
    </CNavGroup>
   */}
  </CSidebarNav>
  

  
  </CSidebar>
    );
}

export default Menu;