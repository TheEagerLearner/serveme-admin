import React from 'react'
import '../myStyles.css'




const DeleteList = () => {
  return (
   <React.Fragment>
   <div>
    <h2 className='delete-header'>Delete List</h2>
    <h5 className='delete-note'>Please Note : once a user / user details are deleted the record is lost forever !</h5>
    <input
    className='search-bar'
   type="text"
   placeholder="Search here"
  // onChange={handleChange}
    />
        <br />
        <br />

        <table id="delete-table">
        <tr className='del-head' >
          <td> ID</td>
          <td>NAME</td>
          <td>USER TYPE</td>
          <td>ACTION</td>
        </tr>
        <tr className='td'>
          <td> 1</td>
          <td>Sameer Haun</td>
          <td>customer</td>
          <td><a href="#" className='btn-del'> DELETE</a></td>
        </tr>

        <tr  className='td'>
          <td> 2</td>
          <td>Sameer Haun</td>
          <td>customer</td>
          <td><a href="#" className='btn-del'> DELETE</a></td>
        </tr>
        <tr>
          <td> 3</td>
          <td>Sameer Haun</td>
          <td>customer</td>
          <td><a href="#" className='btn-del'> DELETE</a></td>
        </tr>
        <tr  className='td'>
          <td> 4</td>
          <td>Sameer Haun</td>
          <td>customer</td>
          <td><a href="#" className='btn-del'> DELETE</a></td>
        </tr>
        </table>

   </div>
   
   </React.Fragment>

  )
}

export default DeleteList;