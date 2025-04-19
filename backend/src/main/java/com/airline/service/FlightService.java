package com.airline.service;

import com.airline.entity.Flight;
import com.airline.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FlightService {

    private final FlightRepository flightRepository;

    @Autowired
    public FlightService(FlightRepository flightRepository) {
        this.flightRepository = flightRepository;
    }

    public List<Flight> getAllFlights() {
        return flightRepository.findAll();
    }

    public Optional<Flight> getFlightById(Integer id) {
        return flightRepository.findById(id);
    }

    public Flight createFlight(Flight flight) {
        return flightRepository.save(flight);
    }

    public Optional<Flight> updateFlight(Integer id, Flight flightDetails) {
        return flightRepository.findById(id).map(flight -> {
            flight.setDepartureTime(flightDetails.getDepartureTime());
            flight.setSource(flightDetails.getSource());
            flight.setDestination(flightDetails.getDestination());
            flight.setSeatsAvailable(flightDetails.getSeatsAvailable());
            flight.setPrice(flightDetails.getPrice());
            return flightRepository.save(flight);
        });
    }

    public boolean deleteFlight(Integer id) {
        return flightRepository.findById(id).map(flight -> {
            flightRepository.delete(flight);
            return true;
        }).orElse(false);
    }
}
