/* eslint-disable no-unused-vars */
import React from 'react'
import "./../style/Skelton.css"
function Skelton() {
  return (
    <>
   
    {/* this is the main dision of screen  */}
    <div className='container-flex vh-100'>

      <div className='row vh-100'>
{/* *************************************this is the left side box start********************************************************** */}
        <div className="main-left col-sm-12 col-md-6 col-lg-6 col-xl-6 ">  

          <div className='heading-box container-flex w-100 vh-30'>
           
          </div>

          <div className='radio-box container-flex  w-100 vh-30 '>
            
          </div>

          <div className='button-box container-flex '>
            
          </div>
        
        </div>{/* this is the left side box end */}

{/* ***********************************************this is the right side box start************************************************ */}
        <div className="main-right col-sm-12 col-md-6 col-lg-6 col-xl-6 "> 

        <div className='right-heading-box container-flex w-100 vh-30'> 
            
        </div>

        <div className='right-location-box container-flex  vh-30'>
            
        </div>

        <div className='right-new-hazard-heading-main-box container-flex  vh-30'>
            
            <div className='row'>

                <div className='right-new-hazard-heading-box container-flex  vh-30'>
                  
                </div>

                <div className='right-new-hazard-box container-flex  vh-30'>
                
                </div>

            </div>
          
        </div>

        <div className='right-hazard-heading-main-box container-flex  vh-30'>
            
            <div className='row'>

              <div className='right-hazard-title-box container-flex  '>
               
              </div>

              <div className='right-hazard-box container-flex  '>
                
              </div>

              <div className='right-hazard-box container-flex '>
                
              </div>

              <div className='right-hazard-box container-flex '>
                
              </div>

              <div className='right-hazard-box container-flex '>
                
              </div>

            </div>
          
        </div>

        

      

   
        </div>{/* this is the right side box end*/}
                 
{/* ********************************************************************************************** */}
        </div>

    </div>

                

    </>
  )
}

export default Skelton