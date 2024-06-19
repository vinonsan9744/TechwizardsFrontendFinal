import React from "react";
import "./../style/HomePage .css";

function HomePage() {
  return (
    <>
      {/* ..........this is the main division of screen.......... */}
      <div className="container-flex vh-100">
        <div className="row vh-100">
          {/* ..........1st container box starts.......... */}
          <div className="main-1st col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="left-main-container-box container-flex">
              {/* ...left upper container... */}
              <div className="row">
                <div className="home-page-left-upper-container-box container-flex">
                  <div className="row">
                    <div className="home-page-left-upper-container-date-box container-flex"></div>
                    <div className="home-page-left-upper-container-location-box container-flex"></div>
                    <div className="home-page-left-upper-container-rain-percentage-box container-flex"></div>
                    <div className="home-page-left-upper-container-heat-rain-icon-box container-flex">
                      <div className="home-page-left-upper-container-heat-icon-box container-flex"></div>
                      <div className="row">
                        {" "}
                        <div className="home-page-left-upper-container-rain-icon-box container-flex"></div>
                        <div className="home-page-left-upper-container-rain-message-box container-flex"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ...left lower container... */}
                <div className="home-page-left-lower-container-box container-flex">
                  <div className="row">
                    <div className="home-page-left-lower-container-wind-precipitation-fog-icon-box container-flex">
                      <div className="row">
                        <div className="home-page-left-lower-container-wind-box container-flex"></div>
                        <div className="home-page-left-lower-container-wind-message-box container-flex"></div>
                      </div>

                      <div className="row">
                        <div className="home-page-left-lower-container-precipitation-box container-flex"></div>
                        <div className="home-page-left-lower-container-precipitation-message-box container-flex"></div>
                      </div>

                      <div className="row">
                        <div className="home-page-left-lower-container-fog-box container-flex"></div>
                        <div className="home-page-left-lower-container-fog-message-box container-flex"></div>
                      </div>
                    </div>
                    <div className="home-page-left-lower-container-message-box container-flex">
                      <div className="row">
                        <div className="home-page-left-lower-container-message-box1 container-flex"></div>
                        <div className="home-page-left-lower-container-message-box2 container-flex"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ..........1st container box ended.......... */}

          {/* ..........2nd container box started.......... */}
          <div className="main-2nd col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="middle-main-container-box container-flex">
              {/* ...middle upper container... */}
              <div className="row">
                <div className="home-page-middle-upper-container-box container-flex">
                  <div className="home-page-middle-upper-container-image-box container-flex">
                    <div className="home-page-middle-upper-container-image-box container-flex"></div>
                  </div>
                </div>
                {/* ...middle lower container... */}
                <div className="home-page-middle-lower-container-box container-flex">
                  <div className="home-page-middle-lower-container-message-box container-flex"></div>
                </div>
              </div>
            </div>
          </div>
          {/* ..........2nd container box ended.......... */}

          {/* ..........3rd container box starts.......... */}
          <div className="main-3rd col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="right-main-container-box container-flex vh-30">
              {/* ...right upper container... */}
              <div className="row">
                <div className="home-page-right-upper-container-box container-flex">
                  <div className="row">
                    <div className="home-page-right-upper-container-header-box container-flex"></div>
                    <div className="home-page-right-upper-container-location-box container-flex"></div>
                    <div className="home-page-right-upper-container-rain-percentage-box container-flex"></div>
                    <div className="home-page-right-upper-container-heat-rain-icon-box container-flex">
                      <div className="home-page-right-upper-container-heat-icon-box container-flex"></div>
                      <div className="row">
                        {" "}
                        <div className="home-page-right-upper-container-rain-icon-box container-flex"></div>
                        <div className="home-page-right-upper-container-rain-message-box container-flex"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ...right lower container... */}
                <div className="home-page-right-lower-container-box container-flex">
                  <div className="row">
                    <div className="home-page-right-lower-container-wind-precipitation-fog-icon-box container-flex">
                      <div className="row">
                        <div className="home-page-right-lower-container-wind-box container-flex"></div>
                        <div className="home-page-right-lower-container-wind-message-box container-flex"></div>
                      </div>

                      <div className="row">
                        <div className="home-page-right-lower-container-precipitation-box container-flex"></div>
                        <div className="home-page-right-lower-container-precipitation-message-box container-flex"></div>
                      </div>

                      <div className="row">
                        <div className="home-page-right-lower-container-fog-box container-flex"></div>
                        <div className="home-page-right-lower-container-fog-message-box container-flex"></div>
                      </div>
                    </div>
                    <div className="home-page-right-lower-container-message-box container-flex">
                      <div className="row">
                        <div className="home-page-right-lower-container-message-box1 container-flex"></div>
                        <div className="home-page-right-lower-container-message-box2 container-flex"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* .......... 3rd container box ended.......... */}
        </div>
      </div>
    </>
  );
}

export default HomePage;
