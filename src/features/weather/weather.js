import { useSelector } from 'react-redux'
export default function Weather() {
    

    const cWeather = useSelector(state => state.weather);
    let svgPath = `${process.env.PUBLIC_URL}/assets/${cWeather.icon}.svg`



    return (
        <div className="flex self-center  flex-1" >
            <img  width="110px" height="110px" src={svgPath} alt="icon" />
            <div className="pl-5 flex flex-col self-center justify-self-center" >
            <span className=" text-5xl " >{cWeather.temp}<sup>°</sup>  {cWeather.fahrenheit?'f':'c'}</span>
            <span  className="pt-1 uppercase justify-self-center" >{cWeather.desc}</span>
            </div>
        </div>
    )
}
