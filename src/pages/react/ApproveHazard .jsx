/* eslint-disable no-unused-vars */
import React from 'react'
import "./../style/ApproveHazard .css"

function ApproveHazard () {
  return (
    <div>
       {/* ..........this is the main division of screen.......... */}
      <div className="container-flex vh-100">
        <div className="row vh-100">
          {/* ..........this is the left side box start.......... */}
          <div className="ah-main-left col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="ah-header-box container-flex w-100 vh-30">
              <div className="ah-title">header</div>
             </div>
             <div className='ah-newhazard-box continer-flex vh-30'>
             <div className="row">
               <div className='ah-newhazard-heading-box container-flex'>
              </div>
              <div className='ah-newhazard-content-box container-flex'>
                <div className='row'>
                  <div className='ah-detail-box container-flex'>
                  </div>
                  <div className='ah-description-box container-flex'>
                  </div>
                  <div className='ah-accept-box container-flex'>
                    <div className='row'>
                      <div className='ah-hazard-btn-box container-flex'>
                      </div>
                      <div className='ah-location-btn-box container-flex'>
                      </div>

                    </div>
                  </div>


                </div>

              </div>


             </div>
             </div>
          </div>
           {/* ..........left side box ended.......... */}


           {/* ..........this is the right side box.......... */}
           <div className="ah-main-right col-sm-12 col-md-6 col-lg-6 col-xl-6">
           <div className="ah-right-header-box container-flex vh-30"></div>
           
           <div className="ah-right-hazard-approve-main-box container-flex vh-30">
              <div className="row">
                <div className="ah-right-location-box container-flex">
                  location
                </div>
                <div className="ah-right-hazards-box container-flex">
                  hazard
                </div>
              </div>
            </div>
            <div className="ah-button-box1 container-flex">
            
            </div>
            <div className="ah-button-box2 container-flex">
            
            </div>


            
          
          
          
          
          
          
          </div>
          {/* ..........right side box ended.......... */}















        </div>
      </div>

    </div>
  )
}

export default ApproveHazard 