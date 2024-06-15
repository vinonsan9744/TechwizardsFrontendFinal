/* eslint-disable no-unused-vars */
import React from 'react'
import Form from 'react-bootstrap/Form';
import "./../style/MathuSaniyan.css"
function MathuSaniyan() {
  return (
    <>

<form>
<div className="loosu radio">
  <label className="radioContainer">
    Option 1
    <input className="naii" type="radio" value="option1" checked={true} />
    <span className="customRadio"></span>
  </label>
</div>

        <div className="radio">
          <label>
            <input type="radio" value="option2" />
            Option 2
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3" />
            Option 3
          </label>
        </div>
      </form>

    </>
  )
}

export default MathuSaniyan