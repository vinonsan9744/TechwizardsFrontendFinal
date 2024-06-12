
import React from "react";
import "./../style/AdminHazardLocation.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function AdminHazardLocation() {
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

                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    Dropdown Button
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <div className="col-12">
                  <div className="radio-buttons-container ">
                    <div className="form-check">
                      <input
                        className="form-check-input custom-radio"
                        type="radio"
                        name="hazardOptions"
                        id="elephant"
                        value="elephant"
                      />
                      <label
                        className="form-check-label custom-radio-label"
                        htmlFor="elephant"
                      >
                        Elephant
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input custom-radio"
                        type="radio"
                        name="hazardOptions"
                        id="bull"
                        value="bull"
                      />
                      <label
                        className="form-check-label custom-radio-label"
                        htmlFor="bull"
                      >
                        Bull
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input custom-radio"
                        type="radio"
                        name="hazardOptions"
                        id="landslide"
                        value="landslide"
                      />
                      <label
                        className="form-check-label custom-radio-label"
                        htmlFor="landslide"
                      >
                        Landslide
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mt-5 d-flex justify-content-start">
              <Button className="button">Update</Button>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 right d-flex flex-column align-items-center justify-content-center">
            <h1 className="title">Hazard Location</h1>
            <hr className="line" />

            <div className="box container">
              <span>Kekirawa</span>
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

export default AdminHazardLocation;

