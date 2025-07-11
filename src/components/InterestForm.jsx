import React, { useState } from 'react';
import './../styles/InterestForm.css';

const InterestForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    guess: '',
    spidrPin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'spidrPin') {
      let rawValue = value.replace(/[^0-9]/g, '').slice(0, 16);
      let formattedValue = rawValue.replace(/(\d{4})(?=\d)/g, '$1-');
      setFormData({ ...formData, [name]: formattedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form className="interest-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Claim Your Air Fryer Now</h2>
      <div className="form-grid">
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input type="number" name="guess" placeholder="Guess the cost ($)" value={formData.guess} onChange={handleChange} required />
        <input type="text" name="spidrPin" placeholder="Spidr PIN (####-####-####-####)" value={formData.spidrPin} onChange={handleChange} required />
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default InterestForm;
