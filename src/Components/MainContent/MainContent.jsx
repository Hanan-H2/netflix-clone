import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieRow from "../MovieRow/MovieRow.jsx";
import requests from "../../api/request.js";
import styles from "./MainContent.module.css";
import BASE_URL from "../../api/tmbd.js";

const MainContent = () => {
  // MOVIES STATE

  const [movies, setMovies] = useState({
    trending: [],
    featured: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
  });

  // =========================
  // FETCH MOVIES
  // =========================
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // GET ALL API DATA
        const [
          trendingResponse,
          featuredResponse,
          topRatedResponse,
          actionResponse,
          comedyResponse,
          horrorResponse,
        ] = await Promise.all([
          axios.get(`${BASE_URL}${requests.fetchTrending}`),

          axios.get(`${BASE_URL}${requests.fetchFeatured}`),

          axios.get(`${BASE_URL}${requests.fetchTopRatedMovies}`),

          axios.get(`${BASE_URL}${requests.fetchActionMovies}`),

          axios.get(`${BASE_URL}${requests.fetchComedyMovies}`),

          axios.get(`${BASE_URL}${requests.fetchHorrorMovies}`),
        ]);

        // SAVE API DATA INTO STATE
        setMovies({
          trending: trendingResponse.data.results || [],

          featured: featuredResponse.data.results || [],

          topRated: topRatedResponse.data.results || [],

          action: actionResponse.data.results || [],

          comedy: comedyResponse.data.results || [],

          horror: horrorResponse.data.results || [],
        });
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    // CALL FUNCTION
    fetchMovies();
  }, []);

  // DISPLAY MOVIE ROWS
  return (
    // add container className to main content
    <section className={styles.mainContent}>
      <MovieRow title="Trending" movies={movies.trending} />

      <MovieRow title="Featured Movies" movies={movies.featured} />

      <MovieRow title="Top Rated" movies={movies.topRated} />

      <MovieRow title="Action Movies" movies={movies.action} />

      <MovieRow title="Comedy Movies" movies={movies.comedy} />

      <MovieRow title="Horror Movies" movies={movies.horror} />
    </section>
  );
};

export default MainContent;
