import React, { useEffect, useState } from 'react';

const FlightList = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/flights')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setFlights(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.toString());
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading flights...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Flight List</h2>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Departure Time</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Seats Available</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.flightId}>
              <td>{flight.flightId}</td>
              <td>{new Date(flight.departureTime).toLocaleString()}</td>
              <td>{flight.source}</td>
              <td>{flight.destination}</td>
              <td>{flight.seatsAvailable}</td>
              <td>${flight.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightList;
