/* eslint-disable no-unused-vars */
import React from 'react'
import "./../style/RegisterPage.css"
import Button from 'react-bootstrap/Button';
function RegisterPage() {
  return (
    <div>
        <div className="container-flex vh-100">
      <div className="row vh-100">

        {/* left side bar start */}
          <div className="RegisterPage-main-left col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            
             <div className="hazard-RegisterPage-header-box container-flex">
              <div className="hazard-RegisterPage-header-title">Sri Lanka Railway Safety System</div>
             </div>

             <div className="hazard-RegisterPage-description-box container-flex">
             <div className="hazard-RegisterPage-header-description"><p>The login process for our Railway Safety System is straightforward and secure. Locomotive pilots or admins simply input their email and password on the login page. The system then verifies these details, ensuring only authorized personnel gain access. Upon successful verification, users are redirected to the main home page, where they can access tailored options and settings designed to facilitate a seamless navigation experience within the system.</p></div>
             </div>

             <div className="hazard-RegisterPage-line-box container-flex">
             {/* <div className="hazard-LoginPage-header-title">Sri Lanka Railway Safety System</div> */}
             </div>

             <div className="hazard-RegisterPage-circle-box container-flex">
                <div className="hazard-RegisterPage-circle1 container-flex"></div>
                <div className="hazard-RegisterPage-circle container-flex"></div>
                <div className="hazard-RegisterPage-circle container-flex"></div>
                <div className="hazard-RegisterPage-circle container-flex"></div>
                <div className="hazard-RegisterPage-circle container-flex"></div>
                <div className="hazard-RegisterPage-circle container-flex"></div>
                <div className="hazard-RegisterPage-circle container-flex"></div>
             </div>

            
          

         
          </div>
{/* left side bar end  */}
          

          <div className="RegisterPage-main-right col-sm-12 col-md-6 col-lg-6 col-xl-6 ">

             <div className="hazard-RegisterPage-heading-box container-flex">
             <div className="hazard-RegisterPage-heading-title">Sign up Form</div>
             </div>

             <div className="hazard-RegisterPage-heading-line-box container-flex">
             {/* <div className="hazard-LoginPage-header-title">Sri Lanka Railway Safety System</div> */}
             </div>
              
             <div className="hazard-RegisterPage-text-box container-flex">
             <input
                type="text"
                placeholder="Enter  User Name"
                className="hazard-RegisterPage-input-text-box"
              />
             </div>

             <div className="hazard-RegisterPage-text-box container-flex">
             <input
                type="text"
                placeholder="Enter  User Name"
                className="hazard-RegisterPage-input-text-box"
              />
             </div>
    
             <div className="hazard-RegisterPage-text-box container-flex">
             <input
                type="text"
                placeholder="Enter  User Name"
                className="hazard-RegisterPage-input-text-box"
              />
             </div>

             <div className="hazard-RegisterPage-text-box container-flex">
             <input
                type="text"
                placeholder="Enter  User Name"
                className="hazard-RegisterPage-input-text-box"
              />
             </div>

             <div className="hazard-RegisterPage-login-button-box container-flex">
             <Button className="hazard-RegisterPage-login-button">Sign in</Button>
             </div>

             <div className="hazard-RegisterPage-register-button-box container-flex">
             <Button className="hazard-RegisterPage-signup-button">Sign up</Button>
             </div>

           

          </div>


        </div>
      </div>
    </div>
  )
}

export default RegisterPage