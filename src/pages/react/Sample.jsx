/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './../style/sam .css'; // Import the CSS file

function Sample() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="radio-container">
            <label className="radio-label">
                <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === 'option1'}
                    onChange={handleOptionChange}
                />
                <span className="custom-radio"></span>
                Option 1
            </label>
            <label className="radio-label">
                <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === 'option2'}
                    onChange={handleOptionChange}
                />
                <span className="custom-radio"></span>
                Option 2
            </label>
        </div>
    );
}

export default Sample;
