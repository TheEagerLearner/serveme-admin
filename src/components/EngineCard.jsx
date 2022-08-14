import React from 'react'
import '../myStyles.css';

const EngineCard = () => {
  return (
    <React.Fragment>


    <div class="card-engine">

    <h2>ENGINE'S</h2>
    <div class="icon-pad-engine">
    <i class="fa-solid fa-boxes-stacked"></i>
    </div>

    <h3> Total Count</h3>

    <div class="card-bottom">
        <div class="card-details">
            <h4> Listed Engines : </h4> 
            <h5 class="card-num-engine"> 300</h5>
        </div>
      
       <div class="buttons-sec">
        <a class="btn-engine" href="/">Add</a>
        <a class="btn-engine" href="/">Modify</a>
        <a class="btn-engine" href="/">Delete</a>
       </div>
    </div>


    </div>

    </React.Fragment>
  )
}

export default EngineCard;