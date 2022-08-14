import React,{useState} from "react";
import {CSidebar,CSidebarBrand,CSidebarNav,CNavTitle,CNavItem,CNavGroup,CBadge,CSidebarToggler  } from '@coreui/react';

import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'

import '@coreui/coreui/dist/css/coreui.min.css'
import "bootstrap/dist/css/bootstrap.min.css";

import './myStyles.css';

import Menu from "./components/Menu";
import Start from "./components/Start";
import UserCard from "./components/UserCard";

const App = () => {


  const [visibleScrolling, setVisibleScrolling] = useState(false)

  return (
  
    <div className="admin">
    <Menu />
    <div className="body">
    
      <Start />
      <UserCard/>
    </div>
    </div>
  
  );
}

export default App;