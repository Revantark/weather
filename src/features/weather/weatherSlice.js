import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import weatherAPI from "./fetchWeather";
export const fetchCurrentLocationWeather = createAsyncThunk(
    'weather/fetchCurrentLocationweather',
    async (position, _) => {
        return weatherAPI({currentPosition:position})
    }
)
const initialState = {
    temp: 0,
    icon:'',
    location:''
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducer: {

    },
    extraReducers: {
        [fetchCurrentLocationWeather.fulfilled]: (state, action) => {
            state.temp = action.payload.temp
            state.icon = action.payload.weatherIcon
            state.location = action.payload.location
        }
    }
});


export default weatherSlice.reducer