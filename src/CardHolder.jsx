import React from 'react'
import UserCard from './components/UserCard'
import SpareCard from './components/SpareCard'

import './myStyles.css';
import GensetCard from './components/GensetCard'
import ServiceCard from './components/ServiceCard';
import EngineCard from './components/EngineCard';

const CardHolder = () => {
  return (
    <React.Fragment>
        <div className='holder1'> 
        <UserCard/>
        <SpareCard/>
       <GensetCard/>
        </div>

        <div className='holder2'> 
            <ServiceCard/>
            <EngineCard/>
        </div>

    </React.Fragment>
  )
}

export default CardHolder;