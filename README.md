# Healing Homoeopathy

Discover the essence of Homoeopathy at HomoeoInsights. Explore natural healing, unravel remedies, and embark on the journey of holistic wellness. Let's dive into our world of gentle yet powerful insights for a healthier tomorrow.

## Project Description

Healing Homoeopathy is a web application for homeopathic consultancy, allowing users to:
1. Post and read blogs related to health and homeopathic medicine and treatment.
2. Book appointments for consultations based on an available calendar.
3. Share information about the BHMS course and related topics.
4. Allow other doctors to register and provide consultation services through the platform.

## Features

- **Personalized Consultation**
- **Natural Remedies**
- **Family Wellness**
- **Chronic Conditions**
- **Mental Well-being**
- **Immune Boosting**

## Project Structure

### Backend

The backend is built with Node.js and Express.js, connected to a MySQL database.

healing-homeopathy/
|-- backend/
| |-- controllers/ # Controller functions for handling requests
| | |-- blogController.js
| | |-- appointmentController.js
| | |-- userController.js
| |-- models/ # Database models
| | |-- Blog.js
| | |-- Appointment.js
| | |-- User.js
| |-- routes/ # Express routes
| | |-- blogRoutes.js
| | |-- appointmentRoutes.js
| | |-- userRoutes.js
| |-- config/ # Configuration files (e.g., database config)
| | |-- db.js
| |-- app.js # Main server file
| |-- package.json


### Frontend

The frontend is built with React.js.

healing-homeopathy/
|-- frontend/
| |-- public/ # Static files
| |-- src/
| |-- components/ # React components
| | |-- Blog.js
| | |-- Appointment.js
| | |-- Home.js
| | |-- Login.js
| | |-- Register.js
| |-- pages/ # Page components
| | |-- AdminDashboard.js
| | |-- BlogList.js
| |-- services/ # API services
| | |-- api.js
| |-- App.js # Main app component
| |-- index.js # Entry point for React
| |-- package.json



## Setup and Running the Application

### Prerequisites

- Node.js
- MySQL
- npm or yarn

### Backend Setup

1. **Navigate to the backend directory:**

   ```bash
   cd healing-homeopathy/backend

## Install backend dependencies:
    ```bash
    npm install

## Start MySQL server and create the database:

    ```basj
    CREATE DATABASE healing_homeopathy;

USE healing_homeopathy;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    role ENUM('doctor', 'patient') DEFAULT 'patient'
);

CREATE TABLE blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    content TEXT,
    category VARCHAR(255),
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES users(id)
);

CREATE TABLE appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    doctor_id INT,
    appointment_date DATETIME,
    status ENUM('pending', 'confirmed', 'completed') DEFAULT 'pending',
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (doctor_id) REFERENCES users(id)
);


## Configure database connection in backend/config/db.js:
    ```bash
    const db = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'healing_homeopathy'
});


## Start the backend server:
    ```bash
    node app.js

The server should now be running on http://localhost:3000.
----------------------------------------------------------------------------------------------------------------------


## Frontend Setup

### Navigate to the frontend directory:
    ```bash
    cd healing-homeopathy/frontend

### Install frontend dependencies:
    ```bash
    npm install

### Start the React development server:
    ```bash
    npm start

The React app should now be running on http://localhost:3000.

-------------------------------------------------------------------------------------------------------------------------------------


## Running the Full Stack Application

Backend:
cd healing-homeopathy/backend
npm install
node app.js


Frontend:
cd healing-homeopathy/frontend
npm install
npm start


Ensure your MySQL server is running and your database is properly configured. With both backend and frontend servers running, your full-stack application should be fully functional.




