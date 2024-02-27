import React, { useState } from 'react';
import './Products.css';

export default function CheckIn() {
  const [numDays, setNumDays] = useState(5);
  const [startDate, setStartDate] = useState('');
  const [numPersons, setNumPersons] = useState(1);
  const [transportationType, setTransportationType] = useState('Flight');

  const calculateTotalCost = () => {
    const farePerDay = 2500;
    const accommodationCostPerDay = 10500;

    const totalFare = numDays * farePerDay * numPersons;
    const totalAccommodationCost = numDays * accommodationCostPerDay * numPersons;
    const totalCost = totalFare + totalAccommodationCost;

    return totalCost;
  };

  return (
    <div className="check-in">
      <h1>Check-In</h1>
      <div className='form'>
      <label>
        Number of Days:
        <input type="number" value={numDays} onChange={(e) => setNumDays(e.target.value)} />
      </label><br/><br/>
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label><br/><br/>
      <label>
        Number of Persons:
        <input type="number" value={numPersons} onChange={(e) => setNumPersons(e.target.value)} />
      </label><br/><br/>
      <label>
        Transportation Type:
        <select value={transportationType} onChange={(e) => setTransportationType(e.target.value)}>
          <option value="Flight">Flight</option>
          <option value="Cruise">Cruise</option>
          <option value="Train">Train</option>
          <option value="Bus">Bus</option>
        </select>
      </label><br/><br/>
      <button onClick={() => alert(`Total Package Cost: ₹${calculateTotalCost()}`)}>Calculate Total Cost</button>
      </div>
    </div>
  );
}
