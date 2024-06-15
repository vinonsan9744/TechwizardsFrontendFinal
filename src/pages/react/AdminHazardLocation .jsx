import React from "react";
import "./../style/AdminHazardLocation.css";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
function AdminHazardLocation() {
  return (
    <>
      {/* ..........this is the main division of screen.......... */}
      <div className="container-flex vh-100">
        <div className="row vh-100">
          {/* ..........this is the left side box start.......... */}
          <div className="main-left col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="admin-hazard-location-header-box container-flex w-100 vh-30">
              <div className="admin-hazard-location-title">header</div>
            </div>

            <div className="admin-hazard-location-dropdown-box container-flex vh-30"></div>

            <div className="admin-hazard-location-radio-button-box container-flex vh-30"></div>

            <div className="admin-hazard-location-button-box container-flex"></div>
          </div>
          {/* ..........left side box ended.......... */}

          {/* ..........this is the right side box.......... */}
          <div className="main-right col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="right-admin-hazard-location-header-box container-flex vh-30"></div>

            <div className="right-admin-hazard-location-location-box container-flex vh-30"></div>

            <div className="right-admin-hazard-location-possible-hazards-main-box container-flex vh-30">
              <div className="row">
                <div className="right-admin-hazard-location-possible-hazards-title-box container-flex"></div>
                <div className="right-admin-hazard-location-possible-hazards-box1 container-flex">
                  estsrgd
                </div>
                <div className="right-admin-hazard-location-possible-hazards-box2 container-flex">
                  rtrstr
                </div>
                <div className="right-admin-hazard-location-possible-hazards-box2 container-flex">
                  rtrstr
                </div>
                <div className="right-admin-hazard-location-possible-hazards-box2 container-flex">
                  rtrstr
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
