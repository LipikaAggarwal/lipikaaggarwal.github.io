-- Create the database
CREATE DATABASE contactme;

-- Select the database
USE contactme;

-- Create the table for registration
CREATE TABLE registration (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Auto-increment primary key for unique identification
    name VARCHAR(255) NOT NULL,         -- Name of the person (varchar to store text)
    email VARCHAR(255) NOT NULL,        -- Email of the person (varchar to store email address)
    text TEXT NOT NULL                  -- Message from the person (text to store larger content)
);
