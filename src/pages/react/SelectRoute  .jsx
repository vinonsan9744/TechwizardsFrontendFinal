
import "./../style/SelectRoute .css";


function SelectRoute() {
  return (
    <>
      {/* ..........this is the main division of screen.......... */}
      <div className="container-flex vh-100">
        <div className="row vh-100">
          {/* ..........this is the left side box start.......... */}
          <div className="main-left col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="select-route-header-box container-flex ">
              <div className="select-route-title">header</div>
            </div>

            <div className="select-route-dropdown-box container-flex">
              <div className="row">
                <div className="select-route-selection-box1 container-flex"></div>
                <div className="select-route-selection-box2 container-flex"></div>
                <div className="select-route-selection-box2 container-flex"></div>
              </div>
            </div>
            <div className="select-route-start-button-box button-box container-flex"></div>
            <div className="select-route-back-button-box button-box container-flex"></div>
          </div>
          {/* ..........left side box ended.......... */}

          {/* ..........this is the right side box.......... */}
          <div className="main-right col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="right-map-box container-flex"></div>
          </div>
          
          {/* ..........right side box ended.......... */}
        </div>
      </div>
    </>
  );
}

export default SelectRoute;
