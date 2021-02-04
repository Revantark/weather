import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import weatherAPI from "./fetchWeather";
export const fetchCurrentLocationWeather = createAsyncThunk(
    'weather/fetchCurrentLocationweather',
    async (position) => {
        
        return weatherAPI({currentPosition:position})
    }
)
export const fetchWeatherByCity = createAsyncThunk(
    'weather/fetchWeatherByCity',
    async (city,{getState}) => {
        return weatherAPI({city:city,fdegree:getState().weather.fahrenheit})
    }
)
const initialState = {
    temp: 0,
    icon:'',
    desc:'',
    loading:true,
    error:false,
    fahrenheit:false,
    locationPermission:'',
    time:'',
    location:'',
    currentWeather:true
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        fahrenheit(state,action){
            state.temp = (state.temp * 9/5) + 32
            state.fahrenheit = true
        },
        celsius(state,action){
            state.temp = (state.temp - 32) * 5/9
            state.fahrenheit = false
        }
    },
    extraReducers: {
        [fetchCurrentLocationWeather.fulfilled]: (state, action) => {
            state.temp = action.payload.temp
            state.icon = action.payload.weatherIcon
            state.location = action.payload.location
            state.currentWeather = true
            state.locationPermission = action.payload.locationPermission
            state.desc = action.payload.desc
            state.time = action.payload.time
            state.loading = false
        },
        [fetchWeatherByCity.fulfilled]: (state, action) => {
            state.temp = action.payload.temp
            state.icon = action.payload.weatherIcon
            state.locationPermission = action.payload.locationPermission
            state.loading = false

            state.location = action.payload.location
            state.currentWeather = false
            state.desc = action.payload.desc
            state.time = action.payload.time

        }
    }
});
export const { fahrenheit, celsius } = weatherSlice.actions
export default weatherSlice.reducer