import React from "react";
import "./../style/HazardLocation .css";

function HazardLocation() {
  return (
    <>
      {/* ..........this is the main division of screen.......... */}
      <div className="container-flex vh-100">
        <div className="row vh-100">
          {/* ..........this is the left side box start.......... */}
          <div className="main-left col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="hazard-location-header-box container-flex w-100 vh-30">
              <div className="hazard-location-title"></div>
            </div>

            <div className="hazard-location-dropdown-box container-flex vh-30"></div>

            <div className="hazard-location-button-box1 container-flex vh-30"></div>

            <div className="hazard-location-button-box2 container-flex vh-30"></div>
          </div>
          {/* ..........left side box ended.......... */}

          {/* ..........this is the right side box.......... */}
          <div className="main-right col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="hazard-location-location-box container-flex vh-30"></div>
            <div className="hazard-location-possible-main-box container-flex vh-30">
              <div className="row">
                <div className="hazard-location-possible-header-box container-flex"></div>
                <div className="hazard-location-possible-content-box1 container-flex"></div>
                <div className="hazard-location-possible-content-box2 container-flex"></div>
                <div className="hazard-location-possible-content-box2 container-flex"></div>
                <div className="hazard-location-possible-content-box2 container-flex"></div>
              </div>
            </div>
          </div>
          {/* ..........right side box ended.......... */}
        </div>
      </div>
    </>
  );
}

export default HazardLocation;
