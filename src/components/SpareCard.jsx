import React from 'react'
import '../myStyles.css';

const SpareCard = () => {
  return (
    <React.Fragment>


    <div class="card-spare">

    <h2>SPARE'S</h2>
    <div class="icon-pad-spare">
        <i class="fa-solid fa-gears " > </i>
    </div>

    <h3> Total Count</h3>

    <div class="card-bottom">
        <div class="card-details">
            <h4> Listed Spares : </h4> 
            <h5 class="card-num-spare"> 300</h5>
        </div>
      
       <div class="buttons-sec">
        <a class="btn-spare" href="/">Add</a>
        <a class="btn-spare" href="/">Modify</a>
        <a class="btn-spare" href="/">Delete</a>
       </div>
    </div>


    </div>

    </React.Fragment>
  )
}

export default SpareCard;