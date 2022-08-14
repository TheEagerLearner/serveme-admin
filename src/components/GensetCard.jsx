import React from 'react'
import '../myStyles.css';

const GensetCard = () => {
  return (
    <React.Fragment>


    <div class="card-genset">

    <h2>GENSET'S</h2>
    <div class="icon-pad-genset">
        <i class="fa-solid fa-toolbox " > </i>
    </div>

    <h3> Total Count</h3>

    <div class="card-bottom">
        <div class="card-details">
            <h4> Listed Gensets : </h4> 
            <h5 class="card-num-genset"> 300</h5>
        </div>
      
       <div class="buttons-sec">
        <a class="btn-genset" href="/">Add</a>
        <a class="btn-genset" href="/">Modify</a>
        <a class="btn-genset" href="/">Delete</a>
       </div>
    </div>


    </div>

    </React.Fragment>
  )
}

export default GensetCard;