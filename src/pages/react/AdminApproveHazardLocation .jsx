import React from "react";
import "./../style/AdminApproveHazardLocation .css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AdminApproveHazardLocation() {
  return (
    <>
      <div className="container-flex text-center" style={{ height: "100vh" }}>
        <div className="row" style={{ height: "100%" }}>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 left d-flex flex-column align-items-center justify-content-center"></div>

          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 right d-flex flex-column align-items-center justify-content-center">
            <h1 className="title">Hazard Location</h1>
            <hr className="line" />

            <div className="box container">
              <span>Anuradapura new-town</span>
            </div>

            <div className="new">
              <p>New Hazard</p>
            </div>

            <div className="boxx container">
              <span>Elephant</span>
            </div>

            <div className="possible">
              <p>Possible Hazards</p>
            </div>

            <div className="box2 col-md-6 container">
              <span>Elephant</span>
            </div>

            <div className="box2 col-md-6 container">
              <span>Bull</span>
            </div>

            <div className="box2 col-md-6 container">
              <span>Land Slide</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminApproveHazardLocation;
