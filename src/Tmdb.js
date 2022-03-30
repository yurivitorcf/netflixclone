const API_KEY = "38c007f28d5b66f36b9c3cf8d8452a4b";
const API_BASE = "https://api.themoviedb.org/3/";

/*
- originals 
- recommended (trending)
- top rated
- action
- comedy
- horror
- romance
- doc

*/

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Netflix Originals",
        items: await basicFetch(
          `discover/tv?with_network=213&language=en-UK&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Recommended for you",
        items: await basicFetch(
          `trending/all/week?language=en-UK&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Top Rated",
        items: await basicFetch(
          `movie/top_rated?language=en-UK&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Action",
        items: await basicFetch(
          `discover/movie?with_genres=28&language=en-UK&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comedy",
        items: await basicFetch(
          `discover/movie?with_genres=35&language=en-UK&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Horror",
        items: await basicFetch(
          `discover/movie?with_genres=27&language=en-UK&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(
          `discover/movie?with_genres=10749&language=en-UK&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentary",
        items: await basicFetch(
          `discover/movie?with_genres=99&language=en-UK&api_key=${API_KEY}`
        ),
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `movie/${movieId}?api_key=${API_KEY}&language=en-UK`
          );
          break;
        case "tv":
          info = await basicFetch(
            `tv/${movieId}?api_key=${API_KEY}&language=en-UK`
          );
          break;
      }
    }
    return info;
  },
};
