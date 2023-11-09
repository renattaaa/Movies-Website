import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWU1ZWM2NDVjOTM0MmE0NzE5Y2M3ZjFhYTFiZDAwNCIsInN1YiI6IjY1MGE5YjlmMWI1YWU1MDEzOGUzYWY4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J56Ika-7RBGgnSNYM12R6f8Ome7yE7GF7wWbIkVWogQ"

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`,
        Accept: `Application/JSON`,
    }
})
