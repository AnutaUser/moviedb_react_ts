import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre} from "../../interfaces";
import {genreService} from "../../api";

interface IState {
    genres: IGenre[];
}

const initialState: IState = {
    genres: [],
};

const getAll = createAsyncThunk<{ genres: IGenre[] }, void>(
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();
            console.log(data)
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload.genres;
            })
});

const {reducer: genreReducer} = genreSlice;

const genreActions = {
    getAll
};

export {
    genreReducer,
    genreActions,
}
