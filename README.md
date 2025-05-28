# Redux CRUD Application

This project is a simple Create, Read, Update, Delete (CRUD) application built using React and Redux Toolkit. It demonstrates how to manage application state efficiently with Redux and perform basic CRUD operations on data.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Redux Toolkit:** The official, opinionated, batteries-included toolset for efficient Redux development.
*   **React Router DOM:** For declarative routing in React applications.
*   **Bootstrap:** A popular CSS framework for responsive and mobile-first front-end web development.

## Features

*   **Create:** Add new data entries.
*   **Read:** Display a list of existing data entries.
*   **Update:** Modify existing data entries.
*   **Delete:** Remove data entries.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Ensure you have Node.js and npm (Node Package Manager) installed.

*   [Node.js](https://nodejs.org/en/download/) (which includes npm)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/MR-JAY-VEKARIYA-94/REDUX_CRUD.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd REDUX_CRUD
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Application

To run the application in development mode:

```bash
npm start
```

This will open the application in your browser at [http://localhost:3000](http://localhost:3000) (or another available port if 3000 is in use). The page will reload if you make edits.

### Building for Production

To build the application for production, which optimizes the build for the best performance:

```bash
npm run build
```

This command creates a `build` folder with the minified and optimized production-ready files. You can then deploy this `build` folder to any static server.

**Note:** If you encounter an `ERR_OSSL_EVP_UNSUPPORTED` error during the build process, it might be due to Node.js version compatibility with OpenSSL. This project's `package.json` has been updated to include `NODE_OPTIONS=--openssl-legacy-provider` in the build script to mitigate this issue for Windows environments.

## Project Structure

The core application logic resides in the `src/assets` directory:

*   `src/assets/App.js`: Main application component.
*   `src/assets/Create.js`: Component for creating new entries.
*   `src/assets/Data.js`: Component for displaying and managing data.
*   `src/assets/Home.js`: Home page component.
*   `src/assets/Reducer.js`: Redux slice for managing application state.
*   `src/assets/Update.js`: Component for updating existing entries.

## Learn More

You can learn more about:

*   [React Documentation](https://react.dev/)
*   [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
*   [React Router Documentation](https://reactrouter.com/en/main)
*   [Bootstrap Documentation](https://getbootstrap.com/)
