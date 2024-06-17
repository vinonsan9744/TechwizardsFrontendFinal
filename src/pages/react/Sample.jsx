import React from 'react';
import Form from 'react-bootstrap/Form';
import './../style/sam .css'; // Ensure this path is correct
function Sample() {
    const radioNames = ['Elephant', 'Bull', 'Other'];

    return (
        <Form className=" radioButtonMain">
            {radioNames.map((name, index) => (
                <div key={index} className="radioItemButon">
                    <Form.Check 
                        type="radio" 
                        id={`radio-${index}`} 
                        
                    >
                        <Form.Check.Input type="radio" isValid className=" inputRadioButton" />
                        <Form.Check.Label className=" lableRadioButton">
                            {name}
                        </Form.Check.Label>
                    </Form.Check>
                    
                </div>
            ))}
        </Form>
    );
}

export default Sample;