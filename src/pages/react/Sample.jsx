
import React from 'react';
import Form from 'react-bootstrap/Form';
import './../style/Sam .css'; // Ensure this path is correct

function Sample() {
    const [selectedMethod, setSelectedMethod] = React.useState('card'); // Using React.useState

    return (
        <div className="admin-hazard-location-left-radio-button-box container-flex ">
            <div className="admin-hazard-location-payment-methods">
            <label className={`admin-hazard-location-method ${selectedMethod === 'card' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={selectedMethod === 'card'}
                    onChange={() => setSelectedMethod('card')}
                    className='admin-hazard-location-radio-button'
                />
                <span className="admin-hazard-location-method-text">Elephant</span>
            </label>
            <label className={`admin-hazard-location-method ${selectedMethod === 'cash' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={selectedMethod === 'cash'}
                    onChange={() => setSelectedMethod('cash')}
                    className='admin-hazard-location-radio-button'

                />
                <span className="admin-hazard-location-method-text">Bull</span>
            </label>
            <label className={`admin-hazard-location-method ${selectedMethod === 'paypal' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={selectedMethod === 'paypal'}
                    onChange={() => setSelectedMethod('paypal')}
                    className='admin-hazard-location-radio-button'

                />
                <span className="admin-hazard-location-method-text">Landslide</span>
            </label>
            <label className={`admin-hazard-location-method ${selectedMethod === 'bitcoin' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    name="payment"
                    value="bitcoin"
                    checked={selectedMethod === 'bitcoin'}
                    onChange={() => setSelectedMethod('bitcoin')}
                    className='admin-hazard-location-radio-button'

                />
                <span className="admin-hazard-location-method-text">Other</span>
            </label>
        </div>
              


        </div>
    );
}

export default Sample;
