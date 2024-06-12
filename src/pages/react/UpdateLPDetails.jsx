/* eslint-disable no-unused-vars */

import React from 'react'
import "./../style/UpdateLPDetails.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function UpdateLPDetails() {
  return (

  <div className="container-flex text-center" style={{ height: '100vh' }}>
    <div className="row" style={{ height: '100%' }}>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 left d-flex flex-column align-items-center justify-content-center">
  
               <div className='container'>
                 <div className='row'>
                   <div className='col-sm-12 col-md-12 col-lg-6'> 
                     <div className="custom-shape position-absolute top-0 start-0 translate-middle-y">
                        <div className="position-absolute top-50 start-0 translate-middle-y">
                           <h2 className=" text-custom-light title-text font-semibold  ">
                            <span> Locomotive Pilot Details </span>
                           </h2>
                        </div>
                     </div>
                   </div>
                 </div>
               </div>
               <Form className='forminput'>
      <Form.Group className="box mb-3" controlId="formBasicEmail">
        <Form.Control className="input" type="text" placeholder="LP ID" />
      </Form.Group>

      <Form.Group className="box mb-3" controlId="formBasicPassword">
        <Form.Control className="input" type="text" placeholder="Name" />
      </Form.Group>
      
      <Form.Group className="box mb-3" controlId="formBasicPassword">
        <Form.Control className="input" type="nic" placeholder="NIC" />
      </Form.Group>

      <Form.Group className="box mb-3" controlId="formBasicPassword">
        <Form.Control className="input" type="number" placeholder="Phone" />
      </Form.Group>

      <Form.Group className="box mb-3" controlId="formBasicPassword">
        <Form.Control className="input" type="email" placeholder="Email" />
      </Form.Group>

      <Button className="btn" variant="primary" type="submit">
        Update
      </Button>
    </Form>
        </div>
      

      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 right d-flex flex-column align-items-center justify-content-center">
      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 right d-flex flex-column align-items-center justify-content-center">
            <h1 className="title">Locomotive pilot</h1>
            <hr className="line" />

            <div className="box1 container">
              <span>SLR123456</span>
            </div>
            <div className="box1 container">
              <span>K Perera</span>
            </div>
            <div className="box1 container">
              <span>996394077V</span>
            </div>
            <div className="box1 container">
              <span>0763988962</span>
            </div>
            <div className="box1 container">
              <span>pereraK12@gmail.com</span>
            </div>
          </div>
       </div>

    </div>
  </div>
  )

}

export default UpdateLPDetails;
