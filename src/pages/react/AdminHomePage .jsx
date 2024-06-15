import React from "react";
import "./../style/AdminHomePage .css";

function AdminHomePage() {
  return (
    <>
      {/* ..........this is the main division of screen.......... */}
      <div className="container-flex vh-100">
        <div className="row vh-100">
          {/* ..........this is the left side box start.......... */}
          <div className="main-left col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="admin-title-box container-flex vh-30">Admin</div>
          </div>
          {/* ..........left side box ended.......... */}

          {/* ..........this is the right side box.......... */}
          <div className="main-right col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="admin-main-button-box container-flex w-100 vh-30">
              <div className="row">
                <div className="admin-button-box1 container-flex"></div>
                <div className="admin-button-box2 container-flex"></div>
                <div className="admin-button-box2 container-flex"></div>
                <div className="admin-button-box2 container-flex"></div>
              </div>
            </div>
          </div>
          {/* ..........right side box ended.......... */}
        </div>
      </div>
    </>
  );
}

export default AdminHomePage;
