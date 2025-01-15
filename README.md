# Contact Management Interface

This project is a **Contact Management Interface** built using modern web technologies. The application features a dynamic interface with a sidebar allowing users to view, search, create, edit, and delete contacts efficiently.

## Features

- View a list of contacts.
- Search for specific contacts.
- Create, edit, and delete contacts dynamically.

## Technologies Used

- **Vite** - Fast build tool for modern web applications.
- **React** - JavaScript library for building user interfaces.
- **TypeScript** - Typed superset of JavaScript.
- **Tailwind CSS** - Utility-first CSS framework.
- **TanStack/react-form** - Library for managing form state.
- **TanStack/react-query** - Powerful data-fetching library.
- **TanStack/react-router** - Routing library for React.
- **Zod** - TypeScript-first schema validation.

## Getting Started

Follow these steps to set up the project on your local machine:

### Prerequisites

- Ensure you have **Node.js** and **npm** installed on your system.

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Prepare configuration files:**
    - Copy the `db.example.json` file to `db.json`:
      ```bash
      cp db.example.json db.json
      ```
    - Copy the `.env.example` file to `.env`:
      ```bash
      cp .env.example .env
      ```
    - Add the following variable to the `.env` file:
      ```env
      VITE_API_URL=http://localhost:3000/
      ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
    - Start the Vite development server:
      ```bash
      npm run dev
      ```
    - Start the JSON server:
      ```bash
      npm run server
      ```

### Access the Application

Once the servers are running, you can access the application in your browser at `http://localhost:5173`.

## Scripts

- `npm run dev` - Starts the Vite development server.
- `npm run server` - Starts the JSON server.

