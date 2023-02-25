import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie, IVideo} from "../../interfaces";
import {movieService} from "../../api";

interface IState {
    movies: IMovie[];
    page: number | null;
    total_pages: number | null;
    videos: IVideo[];
}

const initialState: IState = {
    movies: [],
    page: null,
    total_pages: null,
    videos: [],
};

const getALL = createAsyncThunk<{ page: number, results: IMovie[], total_pages: number }, { page: number }>(
    'movieSlice/getALL',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
);

const getByGenreId = createAsyncThunk<{ results: IMovie[] }, { with_genres: number, page: number, }>(
    'movieSlice/getByGenreId',
    async ({with_genres, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(with_genres, page);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
);

// const getVideo = createAsyncThunk<{ results: IVideo[] }, { movie_id: string }>(
//     'movieSlice/getVideo',
//     async ({movie_id}, {rejectWithValue}) => {
//         try {
//             const {data} = await movieService.getVideos(movie_id);
//             // console.log(data);
//             return data;
//         } catch (e) {
//             const error = e as AxiosError;
//             return rejectWithValue(error.response?.data);
//         }
//     }
// );

const getSearchMovies = createAsyncThunk<{ page: number, results: IMovie[] }, { query: string, page: number }>(
    'movieSlice/getSearchMovies',
    async ({query, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getSearchMovies(query, page);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getALL.fulfilled, (state, action) => {
                const {page, results, total_pages} = action.payload;
                state.movies = results;
                state.page = page;
                state.total_pages = total_pages;
            })
            .addCase(getByGenreId.fulfilled, (state, action) => {
                state.movies = action.payload.results;
            })
            // .addCase(getVideo.fulfilled, (state, action) => {
            //     state.videos = action.payload.results;
            // })
            .addCase(getSearchMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results;
            })
});

const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getALL,
    getByGenreId,
    getSearchMovies,
};

export {
    movieReducer,
    movieActions,
};
