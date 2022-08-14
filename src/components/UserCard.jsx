import React from 'react'
import '../myStyles.css';

const UserCard = () => {
  return (
    <React.Fragment>


    <div class="card-users">

    <h2>USER'S</h2>
    <div class="icon-pad">
        <i class="fa-solid fa-users " > </i>
    </div>

    <h3> Total Count</h3>

    <div class="card-bottom">
        <div class="card-details">
            <h4>Service Provider : </h4> 
            <h5 class="card-num"> 300</h5>
        </div>
        <div class="card-details">
            <h4>Customer : </h4>
             <h5 class="card-num"> 300</h5>
        </div>
       <div class="buttons-sec">
        <a class="btn" href="/">Add</a>
        <a class="btn" href="/">Modify</a>
        <a class="btn" href="/">Delete</a>
       </div>
    </div>


    </div>

    </React.Fragment>
  )
}

export default UserCard;