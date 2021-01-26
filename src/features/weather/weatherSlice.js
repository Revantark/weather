import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import weatherAPI from "./fetchWeather";
export const fetchCurrentLocationWeather = createAsyncThunk(
    'weather/fetchCurrentLocationweather',
    async (position, _) => {
        return weatherAPI({currentPosition:position})
    }
)
export const fetchWeatherByCity = createAsyncThunk(
    'weather/fetchWeatherByCity',
    async (city) => {
        return weatherAPI({city:city})
    }
)
const initialState = {
    temp: 0,
    icon:'',
    location:'',
    currentWeather:true
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
            state.currentWeather = true
        },
        [fetchWeatherByCity.fulfilled]: (state, action) => {
            state.temp = action.payload.temp
            state.icon = action.payload.weatherIcon
            state.location = action.payload.location
            state.currentWeather = false

        }
    }
});


export default weatherSlice.reducer