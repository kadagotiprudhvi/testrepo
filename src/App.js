import React, { useState } from 'react';
import './App.css';

function App() {
  const [fullName, setFullName] = useState('');
  const [carType, setCarType] = useState('sedan');
  const [serviceType, setServiceType] = useState('basicWash');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the submission logic (e.g., sending data to backend)
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1>Welcome to Our Car Washing & Cleaning Service!</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Your Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="carType">Car Type:</label>
          <select
            id="carType"
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
            required
          >
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="truck">Truck</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="serviceType">Select Service:</label>
          <select
            id="serviceType"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            required
          >
            <option value="basicWash">Basic Wash</option>
            <option value="fullDetail">Full Detail</option>
            <option value="interiorOnly">Interior Cleaning Only</option>
            <option value="exteriorOnly">Exterior Cleaning Only</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div className="confirmation-message">
          <p>Thank you, {fullName}!</p>
          <p>You have requested a {serviceType.toLowerCase()} for your {carType.toLowerCase()}.</p>
          <p>We will contact you shortly to confirm.</p>
        </div>
      )}
    </div>
  );
}

export default App;
