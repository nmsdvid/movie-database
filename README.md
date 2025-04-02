# Movie Database

Web application for searching and exploring movies using the OMDB API. Built with React, TypeScript, and Material UI.


## Tech Stack

- React
- TypeScript
- Material UI
- Redux
- React Router v7
- Vite

## Prerequisites

- Node.js (v20 or higher)
- npm

## Getting Started

1. Clone the repository:
```bash
git clone <https://github.com/nmsdvid/movie-database.git>
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Create `.env.template` from `.env`
   - Add your OMDB API key to the `.env` file

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Live Preview

You can view the live version of the application at [movie-database-olive-kappa.vercel.app](https://movie-database-olive-kappa.vercel.app)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create a production build

## Project Structure

```
movie-database/
api/           # API integration layer
components/    # Reusable UI components
routes/        # React Router configuration
store/         # Redux store and slices
themes/        # MUI theme configuration
types/         # TypeScript type definitions
```