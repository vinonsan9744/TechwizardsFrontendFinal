/* eslint-disable no-unused-vars */
import React from "react";
import "./../style/LoginPage.css";

import { FaTrainSubway } from "react-icons/fa6";
import { MdLandslide } from "react-icons/md";
import { GiElephant } from "react-icons/gi";
import { BsFillCloudFog2Fill } from "react-icons/bs";
import { FaCloudRain } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

import { Form, Button } from "react-bootstrap";

function LoginPage() {
  return (
    <>
      <div className="container-flex text-center" style={{ height: "100vh" }}>
        <div className="row" style={{ height: "100%" }}>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 left d-flex flex-column align-items-center justify-content-center">
            <h1 className="title">Sri Lanka Railway Safety System</h1>
            <div>
              <p className="description">
                Welcome to the Sri Lankan Railway Department's Locomotive Pilot
                and Admin System! Streamlining railway operations for efficiency
                and safety across Sri Lanka.
                <hr className="line" />
              </p>
            </div>

            <div className="mainicon">
              <div className="circle">
                <FaTrainSubway className="icon" />
              </div>
              <div className="circle">
                <MdLandslide className="icon" />
              </div>
              <div className="circle">
                <GiElephant className="icon" />
              </div>
              <div className="circle">
                <BsFillCloudFog2Fill className="icon" />
              </div>
              <div className="circle">
                <FaCloudRain className="icon" />
              </div>
              <div className="circle">
                <FaLocationDot className="icon" />
              </div>
            </div>
          </div>

          <div className="right col-sm-12 col-md-6 col-lg-6 col-xl-6  d-flex flex-column align-items-center justify-content-center">
            <h1 className="righttitle">Login</h1>
            <hr className="rightline" />
            <div>
              <div className="form fullscreen">
                <Form>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label={<span className="custom-label">Admin</span>}
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        className="custom-radio"
                      />
                      <Form.Check
                        inline
                        label={
                          <span className="custom-label">Locomotive pilot</span>
                        }
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                        className="custom-radio"
                      />
                    </div>
                  ))}

                  <Form.Group controlId="formUsername" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      className="custom-textbox"
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword" className="mb-3">
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      className="custom-textbox"
                    />
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button variant="success" size="lg">
                      Block level button
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
