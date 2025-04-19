# Airline Reservation System

## Overview

This project is a simple airline reservation system consisting of a Spring Boot backend and a React frontend. The backend provides REST APIs for managing flights and reservations, while the frontend consumes these APIs to provide a user interface.

## Backend Setup

### Prerequisites

- Java 17 or higher
- Maven
- MySQL database

### Database Setup

1. Create a MySQL database for the project.
2. Run the SQL script `database/schema.sql` to create the necessary tables.

### Configuration

Edit the file `backend/src/main/resources/application.properties` and update the following properties with your database credentials:

```
spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
spring.datasource.username=your_db_username
spring.datasource.password=your_db_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
```

### Running the Backend

Navigate to the `backend` directory and run:

```
mvn spring-boot:run
```

The backend server will start on port 8080.

## Frontend Setup

### Prerequisites

- Node.js and npm

### Running the Frontend

Navigate to the `frontend` directory and run:

```
npm install
npm start
```

The frontend will start on port 3000 and communicate with the backend API.

## Features

- Flight management REST API with endpoints to list, create, update, and delete flights.
- Basic React frontend to display the list of flights.

## Testing

Use tools like Postman or curl to test the backend API endpoints:

- `GET /flights` - List all flights
- `GET /flights/{id}` - Get flight details
- `POST /flights` - Create a new flight
- `PUT /flights/{id}` - Update a flight
- `DELETE /flights/{id}` - Delete a flight

## Notes

- User authentication is not implemented in this version.
- Update the database credentials in `application.properties` before running the backend.
