# Frontend - React Blog Application

This is the frontend part of a blog application built with React and Vite. It provides a fast, modern, and responsive user interface for browsing, creating, and managing blog posts.

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js) or yarn

## Installation

1. Clone the repository and navigate to the `Frontend` directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. Create a `.env` file based on `.env.example` and configure your environment variables as needed.

## Running the Development Server

Start the development server with hot module replacement (HMR):
```bash
npm run dev
```
or
```bash
yarn dev
```
The app will be available at `http://localhost:3000` (or the port specified by Vite).

## Building for Production

To build the app for production, run:
```bash
npm run build
```
or
```bash
yarn build
```
The production-ready files will be generated in the `dist` folder.

To preview the production build locally:
```bash
npm run preview
```
or
```bash
yarn preview
```

## Folder Structure Overview

```
Frontend/
├── public/                 # Static assets served directly
├── src/                    # Source files
│   ├── assets/             # Images and other static resources
│   ├── components/         # Reusable React components
│   ├── hooks/              # Custom React hooks
│   ├── helpers/            # Helper functions and utilities
│   ├── Layout/             # Layout components
│   ├── lib/                # Library utilities
│   ├── pages/              # Page components for routing
│   ├── redux/              # Redux state management
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── .env                    # Environment variables (not committed)
├── .env.example            # Example environment variables
├── package.json            # Project metadata and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── vercel.json             # Vercel deployment configuration
```

## Technologies Used

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Redux](https://redux.js.org/) - State management
- [React Router](https://reactrouter.com/) - Client-side routing
- [Vercel](https://vercel.com/) - Deployment platform

## Environment Variables

This project uses environment variables for configuration. Copy `.env.example` to `.env` and update the values as needed.

## Deployment

This project is configured to deploy on Vercel using the `vercel.json` configuration file.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is open source and available under the MIT License.
