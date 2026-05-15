# Student Service & Request Management System

A professional React-based web application designed to digitize and streamline student service requests. This system features a dual-interface for students to submit/track requests and for administrators to manage approvals and data.

## Project Overview

This project implements a full **CRUD** (Create, Read, Update, Delete) lifecycle using a modern React architecture. It focuses on clean code separation, custom hooks for state management, and a responsive sidebar-based UI.

### Key Objectives
* **Digitize** manual request handling.
* **Standardize** data flow using a RESTful API (json-server).
* **Demonstrate** React component-based architecture and custom hooks.
* **Collaborate** effectively using organized Git workflows.

---

## Tech Stack

* **Frontend:** React.js (Hooks, Functional Components)
* **Routing:** React Router v6
* **Styling:** Tailwind CSS
* **State Management:** Custom Hooks (`useRequests`)
* **Backend (Mock):** `json-server`
* **Deployment:** Vercel / Netlify

---

## Project Structure

The project follows a modular architecture for scalability:


```text
src/
├── components/     # Reusable UI (Sidebar, Buttons, Modals)
├── pages/          # View components (StudentDashboard, AdminPanel, SubmitRequest)
├── hooks/          # Custom logic (useRequests.js for data synchronization)
├── services/       # API abstraction (api.js for fetch/axios calls)
├── utils/          # Helper functions (formatters, constants)
└── App.jsx         # Main routing and layout configuration
```