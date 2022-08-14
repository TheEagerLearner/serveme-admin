import React from 'react'
import '../myStyles.css';

const ServiceCard = () => {
  return (
    <React.Fragment>


    <div class="card-service">

    <h2>SERVICE LIST</h2>
    <div class="icon-pad-service">
         <i class="fa-solid fa-clipboard-list"></i>
    </div>

    <h3> Total Count</h3>

    <div class="card-bottom">
        <div class="card-details">
            <h4> Service List : </h4> 
            <h5 class="card-num-service"> 300</h5>
        </div>
      
       <div class="buttons-sec">
        <a class="btn-service" href="/">Add</a>
        <a class="btn-service" href="/">Modify</a>
        <a class="btn-service" href="/">Delete</a>
       </div>
    </div>


    </div>

    </React.Fragment>
  )
}

export default ServiceCard;