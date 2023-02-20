const baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'b6c98ea96595749707f6ca37f215c291';

const endPoints = {
    movie: '/discover/movie',
    movieById: (id: string): string => `/discover/movie/${id}`,
    genre: '/genre/movie/list',
};

export {
    baseURL,
    endPoints,
    API_KEY
};

// https://api.themoviedb.org/3/genre/movie/list?api_key=b6c98ea96595749707f6ca37f215c291
