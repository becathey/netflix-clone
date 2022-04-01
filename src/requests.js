const API_KEY = process.env.REACT_APP_TMDB_API_KEY

const requests = {
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchSFMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests