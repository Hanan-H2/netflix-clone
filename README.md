# MyFlix

MyFlix is a React movie and TV discovery interface built with Vite. It displays a featured title banner and horizontally browsable rows of titles using data from The Movie Database (TMDB).

## Features currently implemented

- A header with MyFlix branding and Home, Series, Movies, Trending, My Collection, and Languages links.
- A search control that expands to show a text field.
- A profile menu that toggles Account, Help Center, and Sign out entries, and a notification icon with a displayed count.
- A featured banner populated with a randomly selected result from TMDB's weekly trending endpoint. The title, backdrop, and overview are displayed; long overviews can be expanded or collapsed.
- Movie rows for Trending, Featured Movies, Top Rated, Action Movies, Comedy Movies, and Horror Movies. The rows use Swiper navigation and show 2, 4, or 6 cards depending on viewport width.
- Cards display available poster art, title, rating, media type, an HD label, and overview, with play, add, like, and more icons.
- A footer with social icons and link labels.
- A local sample movie data array and image assets are present in `src/Data/Data.js` and `src/assets/image/`.

The interface also contains visible buttons and links for actions such as Play, My List, and navigation. Those controls are presentation-only in the current code; no playback, account, favorites, or search-result behavior is implemented.

## Tech stack

- React 19 and React DOM
- Vite 8 with `@vitejs/plugin-react`
- Axios for HTTP requests
- Swiper for the movie-row carousels
- `react-icons` for interface icons
- CSS Modules for component styles and global CSS
- Oxlint for linting

## TMDB API configuration

The app requests data from `https://api.themoviedb.org/3`. The API key is read from the Vite environment variable `VITE_TMDB_API_KEY` in `src/api/request.js`.

Create a `.env` file in the project root and provide your own TMDB API key:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

The application uses these TMDB endpoints:

| Display | Endpoint |
| --- | --- |
| Trending and banner | `/trending/all/week` |
| Featured Movies | `/discover/tv` sorted by popularity |
| Top Rated | `/movie/top_rated` |
| Action Movies | `/discover/movie` with genre 28 |
| Comedy Movies | `/discover/movie` with genre 35 |
| Horror Movies | `/discover/movie` with genre 27 |

The request configuration also defines Romance Movies (genre 10749) and Documentaries (genre 99), but those requests are not currently used in the rendered rows.

## Getting started

From the `netflix-clone` project directory, install dependencies and start the development server:

```sh
npm install
npm run dev
```

Set `VITE_TMDB_API_KEY` in `.env` as described above to enable TMDB requests. Vite loads environment variables when the server starts, so restart the development server after changing `.env`.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Project structure

```text
netflix-clone/
├── index.html                    # HTML entry point and page title
├── package.json                  # Dependencies and npm scripts
├── package-lock.json             # Locked npm dependency versions
├── vite.config.js                # Vite configuration and React plugin
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                  # React entry point
    ├── App.jsx                   # Header, banner, content, and footer composition
    ├── App.css
    ├── index.css                 # Global styles
    ├── api/
    │   ├── request.js            # TMDB endpoint definitions and API key
    │   └── tmbd.js               # TMDB API base URL
    ├── Data/
    │   └── Data.js               # Local sample movie data
    ├── Components/
    │   ├── Header/
    │   ├── Banner/
    │   ├── MainContent/
    │   ├── MovieRow/
    │   ├── MovieCard/
    │   └── Footer/
    └── assets/
        └── image/                # Local image assets
```

Each component directory contains its JSX component and a corresponding CSS Module.
