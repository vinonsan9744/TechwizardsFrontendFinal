import { useState } from "react";
import "./../style/UpdateHazard.css";

function UpdateHazard() {
  return (
    <>
      {/* ..........this is the main division of screen.......... */}
      <div className="container-flex vh-100">
        <div className="row vh-100">
          {/* ..........this is the left side box start.......... */}
          <div className="main-left col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <div className="update-hazard-header-box container-flex w-100 vh-30">
              <div className="update-hazard-title">header</div>
            </div>

            <div className="update-hazard-button-box1 container-flex vh-30"></div>
            <div className="update-hazard-button-box2 container-flex vh-30"></div>
          </div>
          {/* ..........left side box ended.......... */}

          {/* ..........this is the right side box.......... */}
          <div className="main-right col-sm-12 col-md-9 col-lg-9 col-xl-9">
            <div className="update-hazard-main-input-box container-flex vh-30">
              <div className="row">
                <div className="update-hazard-input-box1 container-flex"></div>
                <div className="update-hazard-input-box1 container-flex"></div>
                <div className="update-hazard-input-box1 container-flex"></div>
                <div className="update-hazard-input-box1 container-flex"></div>
                <div className="update-hazard-input-box2 container-flex"></div>
              </div>
            </div>
          </div>
          {/* ..........right side box ended.......... */}
        </div>
      </div>
    </>
  );
}

export default UpdateHazard;
