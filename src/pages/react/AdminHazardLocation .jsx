/* eslint-disable no-unused-vars */
import React from "react";
import "./../style/AdminHazardLocation.css";

function AdminHazardLocation() {
  return (
    <>
      {/* ..........this is the main division of screen.......... */}
      <div className="container-flex vh-100">
        <div className="row vh-100">
          {/* ..........this is the left side box start.......... */}
          <div className="main-left col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="admin-hazard-location-header-box container-flex ">
              <div className="admin-hazard-location-title">header</div>
            </div>

            <div className="admin-hazard-location-left-heading-box container-flex "></div>

  

            <div className="admin-hazard-location-left-radio-button-box container-flex "></div>

            <div className="admin-hazard-location-left-button-box1 container-flex"></div>
            
            <div className="admin-hazard-location-left-button-box2 container-flex"></div>
          </div>
          {/* ..........left side box ended.......... */}

          {/* ..........this is the right side box.......... */}
          <div className="main-right col-sm-12 col-md-6 col-lg-6 col-xl-6">

            <div className="right-admin-hazard-location-header-box container-flex "></div>

            <div className="right-admin-hazard-location-header-box-line container-flex "></div>

            <div className="right-admin-hazard-location-location-box container-flex "></div>

            <div className="right-admin-hazard-location-possible-hazards-main-box container-flex ">
              <div className="row">
                <div className="right-admin-hazard-location-possible-hazards-title-box container-flex"></div>

                <div className="right-admin-hazard-location-possible-hazards-content-box container-flex">
                  estsrgd
                </div>

                <div className="right-admin-hazard-location-possible-hazards-content-box container-flex">
                  estsrgd
                </div>

                <div className="right-admin-hazard-location-possible-hazards-content-box container-flex">
                  estsrgd
                </div>

                <div className="right-admin-hazard-location-possible-hazards-content-box container-flex">
                  estsrgd
                </div>
                
                
                
              </div>
            </div>
          </div>
          {/* ..........right side box ended.......... */}
        </div>
      </div>
    </>
  );
}

export default AdminHazardLocation;
