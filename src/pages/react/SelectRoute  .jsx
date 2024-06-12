/* eslint-disable no-unused-vars */
import React from 'react'
import "./../style/SelectRoute .css"
import Dropdown from 'react-bootstrap/Dropdown';

function SelectRoute  () {
  return (
 <div>
   <div className="container-flex text-center" style={{ height: '100vh' }}>
      <div className="row" style={{ height: '100%' }}>
           
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 left d-flex flex-column align-items-center justify-content-center">
            <div className='container'>
                 <div className='row'>
                   <div className='col-sm-12 col-md-12 col-lg-6'> 
                     <div className="custom-shape position-absolute top-0 start-0 translate-middle-y">
                        <div className="position-absolute top-50 start-0 translate-middle-y">
                           <h2 className=" text-custom-light title-text font-semibold  ">
                             Select Route
                           </h2>
                        </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
       
             <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 right d-flex flex-column align-items-center justify-content-center">
               
             </div>


      </div>
    </div>
  </div>
  )
}

export default SelectRoute  