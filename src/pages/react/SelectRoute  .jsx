/* eslint-disable no-unused-vars */
import React from 'react'
import "./../style/SelectRoute .css"


function SelectRoute() {
  return (
    <>
   
    {/* this is the main dision of screen  */}
    <div className='container-flex vh-100'>

      <div className='row vh-100'>
{/* *************************************this is the left side box start********************************************************** */}
        <div className="main-left col-sm-12 col-md-6 col-lg-6 col-xl-6 ">  

          <div className='heading-box container-flex w-100 vh-30'>
           
          </div>

          <div className='dropdown-box container-flex  w-100 vh-30 '>
            
            <div className='row'>

              <div className='left-select-route  container-flex  vh-30'>
  
              </div>

              <div className='left-start-point  container-flex  vh-30'>

               </div>

               <div className='left-end-point  container-flex  vh-30'>

               </div>

            </div>
          </div>

          <div className='button-box container-flex '>
            
          </div>
        
        </div>{/* this is the left side box end */}

{/* ***********************************************this is the right side box start************************************************ */}
        <div className="main-right col-sm-12 col-md-6 col-lg-6 col-xl-6 "> 

       

        

      

   
        </div>{/* this is the right side box end*/}
                 
{/* ********************************************************************************************** */}
        </div>

    </div>

                

    </>
  )
}

export default SelectRoute