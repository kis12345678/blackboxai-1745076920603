-- Users table
CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  role ENUM('ADMIN', 'CUSTOMER', 'STAFF') NOT NULL,
  password_hash VARCHAR(255) NOT NULL
);

-- Flights table
CREATE TABLE flights (
  flight_id INT AUTO_INCREMENT PRIMARY KEY,
  departure_time DATETIME NOT NULL,
  source VARCHAR(100) NOT NULL,
  destination VARCHAR(100) NOT NULL,
  seats_available INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);

-- Reservations table
CREATE TABLE reservations (
  reservation_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  flight_id INT NOT NULL,
  status ENUM('BOOKED', 'CANCELLED') NOT NULL,
  payment_id INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (flight_id) REFERENCES flights(flight_id),
  FOREIGN KEY (payment_id) REFERENCES payments(payment_id)
);

-- Payments table
CREATE TABLE payments (
  payment_id INT AUTO_INCREMENT PRIMARY KEY,
  amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) NOT NULL,
  stripe_transaction_id VARCHAR(255)
);
