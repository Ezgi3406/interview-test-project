import React from 'react';
import useData from './useData';
import './style.scss';
import SingleVehicle from '../SingleVehicle';

export default function VehicleList() {
  const [loading, error, vehicles] = useData();
  console.log(vehicles);
  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{error}</div>;
  }
  if (vehicles.length > 0) {
    return (
      <div data-testid="vehicle">
        {vehicles.map((vehicle, index) => (
          <SingleVehicle
            key={index.id}
            vehicle={vehicle}
          />
        ))}
      </div>
    );
  }

  return (
    <div data-testid="results">
      <p>List of vehicles will be displayed here</p>
      <p>
        Visit
        <a href="/api/vehicles.json" target="_blank">
          {' '}
          /api/vehicles.json
        </a>
        {' '}
        (main endpoint)
      </p>
      <p>
        Visit
        <a href="/api/vehicle_fpace.json" target="_blank">
          /api/vehicle_fpace.json
        </a>
        {' '}
        (detail endpoint - apiUrl)
      </p>
      <p>
        Visit
        <a href="/api/vehicle_xf.json" target="_blank">
          /api/vehicle_xf.json
        </a>
        {' '}
        (vehicle without any price)
      </p>
    </div>
  );
}
