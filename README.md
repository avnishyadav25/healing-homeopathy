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
6. [Folder Structure](#folder-structure)

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

- **Mobile App** (To be developed later):
  - React Native (Planned)

- **Authentication**: 
  - JWT Authentication
  - OAuth with Google for Login

- **CMS (Admin Dashboard)**:
  - MUI Admin Panel
  - Blog and Media Management
  - Services and User Management

---

## Project Structure

The application is divided into three parts:

1. **Frontend (Web App)**: 
   - Contains the website's public and admin-facing pages for blog management, service booking, and user registration.
  
2. **Backend (API)**: 
   - Contains REST API services that handle blog posts, user authentication, medicine orders, and service management.

3. **Mobile App**: 
   - Planned for future development with React Native, integrating features like blog reading and appointment booking.

---

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


## Installation

### Backend

```bash
    cd backend
    npm install
