# MERN Blog Application

This is a full-stack blog application built with the MERN stack (MongoDB, Express, React, Node.js). The project is organized into two main parts: the Backend API server and the Frontend React application.

---

## Technologies Used

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- JWT Authentication
- Cloudinary for image uploads
- Multer for file handling
- Cors, Cookie-parser, Dotenv

### Frontend
- React
- Vite
- Tailwind CSS
- Redux for state management
- React Router for client-side routing
- Vercel for deployment

---

## Folder Structure Overview

```
.
├── Backend/       # Backend API server
├── Frontend/      # Frontend React application
├── README.md      # This file
```

---

## Setup Instructions

### Backend Setup

1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example` and configure the following environment variables:
   - `PORT` - Port number for the backend server (e.g., 5000)
   - `MONGODB_CONN` - MongoDB connection string
   - `FRONTEND_URL` - URL of the frontend application (for CORS)

4. Run the backend server in development mode:
   ```bash
   npm run dev
   ```
   Or to start normally:
   ```bash
   npm start
   ```

The backend server will start and listen on the specified port.

---

### Frontend Setup

The frontend is a React application built with Vite. For detailed setup and running instructions, please refer to the [Frontend README](./Frontend/README.md).

In summary:

1. Navigate to the `Frontend` directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example` and configure environment variables as needed.

4. Run the development server:
   ```bash
   npm run dev
   ```

The frontend app will be available at `http://localhost:3000` by default.

---

## Environment Variables

Both backend and frontend use environment variables for configuration. Make sure to create `.env` files in both directories based on the provided `.env.example` files.

Important backend variables:
- `PORT`
- `MONGODB_CONN`
- `FRONTEND_URL`

Important frontend variables:
- Refer to `Frontend/.env.example`

---

## Running the Application

To run the full application locally, start both backend and frontend servers concurrently in separate terminal windows:

- Backend: `npm run dev` in `Backend` folder
- Frontend: `npm run dev` in `Frontend` folder

---

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com/) with configuration files in both `Backend/vercel.json` and `Frontend/vercel.json`.

---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

---

## License

This project is open source and available under the MIT License.
