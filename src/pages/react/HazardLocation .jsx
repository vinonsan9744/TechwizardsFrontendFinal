/* eslint-disable no-unused-vars */
import React from "react";
import "./../style/HazardLocation .css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";

function HazardLocation() {
  return (
    <>
      <div className="container-flex text-center" style={{ height: "100vh" }}>
        <div className="row" style={{ height: "100%" }}>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 left d-flex flex-column align-items-center justify-content-center">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="custom-shape position-absolute top-0 start-0 translate-middle-y">
                    <div className="position-absolute top-50 start-0 translate-middle-y">
                      <h2 className=" text-custom-light title-text font-semibold  ">
                        Update Hazard
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="dropdown1 container mt-5">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Location"
                    className="custom-dropdown-button1"
                  >
                    <Dropdown.Item href="#/action-1">
                      Anuradhapura
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Jaffna</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Colombo</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Galle</Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
            </div>

            <div className="container mt-5 d-flex justify-content-start">
              <Button className="button4" variant="primary">
                Search
              </Button>
              <Button className="button4" variant="primary">
                Back
              </Button>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 right d-flex flex-column align-items-center justify-content-center">
            <div className="box0 container">
              <span>Kekirawa</span>
            </div>

            <h1 className="title1">Possible Hazards</h1>
            <hr className="line2" />

            <div className="boxxx col-md-6 container">
              <span>Bull</span>
            </div>
            <div className="boxxx col-md-6 container">
              <span>Elephant</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HazardLocation;
