/* eslint-disable no-unused-vars */
import React from 'react';
import "./../style/AdminApproveHazardLocation .css";
import Button from 'react-bootstrap/Button';




function AdminApproveHazardLocation() {
  return (
    <>

<div className="container-flex text-center" style={{ height: '100vh' }}>

<div className="row" style={{ height: '100%' }}>

<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 left d-flex flex-column align-items-center justify-content-center">
    

    <div className='container'>

      <div className='row'>

          <div className='col-sm-12 col-md-12 col-lg-6'> 

              <div className="custom-shape position-absolute top-0 start-0 translate-middle-y">
                 <div className="position-absolute top-50 start-0 translate-middle-y">
                    <h2 className=" text-custom-light title-text font-semibold  ">
                         Update Hazard 
                    </h2>
                 </div>
              </div>
    
   
          </div>

          <div className='col-12'> 
          <div className="radio-buttons-container ">
          <div className="form-check">
             <input className="form-check-input custom-radio" type="radio" name="hazardOptions" id="elephant" value="elephant" />
             <label className="form-check-label custom-radio-label" htmlFor="elephant">
              Elephant
             </label>
          </div>

            <div className="form-check">
              <input className="form-check-input custom-radio" type="radio" name="hazardOptions" id="bull" value="bull" />
              <label className="form-check-label custom-radio-label" htmlFor="bull">
               Bull
              </label>
            </div>

            <div className="form-check">
              <input className="form-check-input custom-radio" type="radio" name="hazardOptions" id="landslide" value="landslide" />
              <label className="form-check-label custom-radio-label" htmlFor="landslide">
                Landslide
               </label>
            </div>
      
      </div>
          </div>



      </div>

    </div>

  <div className='container mt-5 d-flex justify-content-start'>
  <Button className="button" variant="primary">Update</Button>
  <Button className="button1" variant="primary">Home</Button>
  </div>
   
  
  

   
    
 
   
   </div>

  <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 right d-flex flex-column align-items-center justify-content-center">
    
            
  

  </div>

</div>

</div>




    </>
  )
}

export default AdminApproveHazardLocation