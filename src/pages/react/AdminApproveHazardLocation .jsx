import React from "react";
import "./../style/AdminApproveHazardLocation .css";
import Button from "react-bootstrap/Button";

function AdminApproveHazardLocation() {
  return (
    <>
      {/* this is the main dision of screen  */}
      <div className="container-flex vh-100">
        <div className="row vh-100">
          {/* *************************************this is the left side box start********************************************************** */}
          <div className="main-left col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <div className="heading-box container-flex w-100 vh-30">
              <h1 className="title">Hazard Location</h1>
            </div>

            <div className="radio-box container-flex   vh-30 "></div>

            <div className="button-box1 container-flex ">
              <Button className="update-button">Update</Button>
            </div>

            <div className="button-box2 container-flex ">
              <Button className="cancel-button">Cancel</Button>
            </div>
          </div>
          {/* this is the left side box end */}

          {/* ***********************************************this is the right side box start************************************************ */}
          <div className="main-right col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <div className="right-heading-box container-flex w-100 vh-30">
              <h1 className="right-title">Hazard Location</h1>
            </div>

            <div className="right-location-box container-flex  vh-30">
              <h1 className="right-location">Anuradhapura New Town</h1>
            </div>

            <div className="right-new-hazard-heading-main-box container-flex  vh-30">
              <div className="row">
                <div className="right-new-hazard-heading-box container-flex  vh-30">
                  <h3 className="right-new-hazard-heading">New Hazard</h3>
                </div>

                <div className="right-new-hazard-box container-flex  vh-30">
                  <h3 className="right-new-hazard-heading">Elephant</h3>
                </div>
              </div>
            </div>

            <div className="right-hazard-heading-main-box container-flex  vh-30">
              <div className="row">
                <div className="right-hazard-title-box container-flex  ">
                  <h4 className="right-new-hazard-heading">Possible Hazard</h4>
                </div>

                <div className="right-hazard-box container-flex  ">
                  <h3 className="right-hazard">Elephant</h3>
                </div>

                <div className="right-hazard-box container-flex ">
                  <h3 className="right-hazard">Elephant</h3>
                </div>

                <div className="right-hazard-box container-flex ">
                  <h3 className="right-hazard">Elephant</h3>
                </div>

                <div className="right-hazard-box container-flex ">
                  <h3 className="right-hazard">Elephant</h3>
                </div>
              </div>
            </div>
          </div>
          {/* this is the right side box end*/}

          {/* ********************************************************************************************** */}
        </div>
      </div>
    </>
  );
}

export default AdminApproveHazardLocation;
