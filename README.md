# Healing Homeopathy Web and Mobile App

## Project Overview

Healing Homeopathy is a web and mobile application designed to offer personalized homeopathic consultancy and wellness services. The platform includes features such as blog posting, service bookings, medicine delivery, user registration, and admin management.

The project structure is designed for scalability, maintainability, and performance optimization, built with modern web technologies.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Project Structure](#project-structure)
3. [Installation](#installation)
4. [Features](#features)
5. [API Documentation](#api-documentation)
6. [Future Plans](#future-plans)
7. [License](#license)

## Technologies Used

- **Frontend**: 
  - React.js, Material-UI (MUI), Bootstrap
  - JoditEditor for WYSIWYG content creation
  - Axios for API requests
  - React Router for routing
  - Particles.js for animation
  - Aceternity-UI (if included)
  
- **Backend**: 
  - Node.js, Express.js
  - MongoDB for database
  - Multer for file uploads (images)
  - JSON Web Token (JWT) for authentication
  - Multer for file handling
  
- **Mobile App**: (To be developed later)
  - React Native (Planned)
  
- **Authentication**: 
  - JWT Authentication
  - OAuth with Google for Login
  
- **CMS (Admin Dashboard)**:
  - MUI Admin Panel
  - Blog and Media Management
  - Services and User Management

## Project Structure

The application is divided into three parts:

1. **Frontend (Web App)**: 
   - Contains the website's public and admin-facing pages for blog management, service booking, and user registration.
  
2. **Backend (API)**: 
   - Contains REST API services that handle blog posts, user authentication, medicine orders, and service management.

3. **Mobile App**: 
   - Planned for future development with React Native, integrating features like blog reading and appointment booking.

### Folder Structure

```bash
root
├── /backend                # Backend services (Node.js + Express + MongoDB)
│   ├── /src
│   │   ├── /controllers    # Controllers for handling API requests
│   │   ├── /models         # MongoDB models (e.g., Blog, User, Service)
│   │   ├── /routes         # API routes
│   │   ├── /services       # Business logic and service classes
│   │   └── /utils          # Utility functions (authentication, error handling)
│   ├── /uploads            # Directory for uploaded files (images)
│   ├── /config             # Configuration files for database, environment, etc.
│   └── app.js              # Entry point for the backend application
  
├── /web-app                # React.js Web App (Frontend)
│   ├── /src
│   │   ├── /components     # Reusable UI components (NavigationBar, Footer, Blog)
│   │   ├── /pages          # Pages for various routes (Home, About, Blog, Services)
│   │   ├── /admin          # Admin Panel Components (Blog Management, Dashboard)
│   │   ├── /services       # Axios service functions to connect with backend
│   │   ├── /assets         # Static assets (images, fonts, icons)
│   │   └── App.js          # Main app component
│   └── package.json        # NPM dependencies for web app
  
├── /mobile-app             # React Native Mobile App (Planned)
│   ├── /src
│   └── package.json        # NPM dependencies for mobile app (React Native)
  
└── /shared                 # Shared codebase across web and mobile
    ├── /components         # Shared components (UI, forms)
    ├── /hooks              # Custom hooks
    └── /utils              # Helper functions (validation, formatting)

```

## Installation

### Backend

1. Navigate to the backend directory:

``` bash
cd backend
``` 


2. Install dependencies:

``` bash
npm install
``` 

3. Set up environment variables:

- Create a .env file in the backend directory.
- Add necessary environment variables (e.g., database URI, JWT secret).

4. Run the backend server:

``` bash
npm start
``` 



### Web App (Frontend)

1. Navigate to the backend directory:

``` bash
cd web-app
``` 


2. Install dependencies:

``` bash
npm install
``` 

3. Set up environment variables:

- Create a .env file in the backend directory.
- Add necessary environment variables (e.g., API endpoints).

4. Run the backend server:

``` bash
npm start
``` 

### Mobile App(Flanned)

1. Navigate to the backend directory:

``` bash
cd web-app
``` 


2. Install dependencies:

``` bash
npm install
``` 

3. Set up environment variables:

- Create a .env file in the backend directory.
- Add necessary environment variables (e.g., API endpoints).

4. Run the backend server:

``` bash
npm start
``` 

## Features

### User Features

- **Homepage**: Full-width cover section with navigation bar, call-to-action, and an image gallery.
- **Blogs**: Ability to read blog posts, search, filter by category, and view recent blogs.
- **Consultation Booking**: Users can book consultations with doctors, choose services, and select dates.
- **Medicine Delivery**: Users can order homeopathic medicines online.
- **Contact Us**: Includes a contact form and a location map.

### Admin Features (CMS)

- **Dashboard**: Admin view to manage users, blogs, services, and appointments.
- **Create Blog**: WYSIWYG editor for creating and scheduling blog posts.
- **Blog List**: View and manage all blogs, edit, archive, or delete posts.
- **Service Management**: Add, edit, and remove services offered on the platform.
- **Appointment Management**: Manage and view all user bookings.
- **Multi-Select Actions**: Select multiple blogs or services for batch actions (delete, archive).

## API Documentation

### Authentication

- **POST** `/auth/register`: Register a new user
- **POST** `/auth/login`: Login and receive a JWT token
- **GET** `/auth/google`: OAuth login via Google

### Blog

- **GET** `/blogs`: Fetch all blogs (with pagination and filters)
- **GET** `/blogs/:id`: Fetch a specific blog post
- **POST** `/blogs/create`: Create a new blog (admin)
- **PUT** `/blogs/update/:id`: Update an existing blog post
- **DELETE** `/blogs/delete/:id`: Delete a blog post

### Services

- **GET** `/services`: Fetch all services
- **POST** `/services/create`: Create a new service (admin)

### Appointments

- **POST** `/appointments/create`: Book a new appointment
- **GET** `/appointments`: Get user appointments

## Future Plans

- **Mobile App**: The mobile app will offer similar functionality as the web app but optimized for mobile experiences.
- **Payment Integration**: Plan to integrate Stripe/PayPal for medicine and service payments.
- **Real-time Notifications**: Push notifications for appointments, blog updates, and promotions.

## License

This project is licensed under the MIT License.


---

### Additional Tips:

- **Badges**: Consider adding badges at the top of your README for build status, license, npm version, etc., to provide quick insights.
  
  ```markdown
  ![License](https://img.shields.io/badge/license-MIT-blue.svg)
  ![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)
  ![npm Version](https://img.shields.io/npm/v/your-package-name.svg)


## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request


## Screenshots

![Homepage](./screenshots/homepage.png)
![Admin Dashboard](./screenshots/admin-dashboard.png)
