interface IMovie {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: null | object;
    budget: number;
    genre_ids: number[];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;

    production_companies: [{
        name: string;
        id: number;
        logo_path: string | null;
        origin_country: string;
    }];

    production_countries: [{
        iso_3166_1: string;
        name: string;
    }]

    release_date: string;
    revenue: number;
    runtime: number | null;
    spoken_languages: [{
        iso_639_1: string;
        name: string;
    }];

    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface IGenre {
    id: number;
    name: string;
}

export type {
    IMovie,
    IGenre
};
