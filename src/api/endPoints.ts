const baseURL = 'https://api.themoviedb.org/3';

const ACCESS_TOKEN_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGFkZmRmMDVlMmI5Njk0OGJmNmMxZWQwNDIxZmFlNyIsInN1YiI6IjYwY2Y2YTY3YjQ1OGI4MDAyOTRmMDQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AwAZlV_uqSmJ4_VW6d6xEBdrSFgDpesp5TbRfPupHZM'

const endPoints = {
    movie: '/discover/movie',
    movieById: (id: string): string => `/discover/movie/${id}`,
    genre: '/genre/movie/list',
};

export {
    baseURL,
    endPoints,
    ACCESS_TOKEN_KEY
};
