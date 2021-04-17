import React from "react";
import { useSpring, useTrail, animated } from "react-spring";

// Import component
import Card from "./card";

function Forecast({todayForecast, forecasts, animate, isDay}){

    const springProps = useSpring({
        opacity: 1,
        left: "0px",

        from: {
            opacity: 0,
            left: "-225px"
        },
        config: {
            mass: 1,
            tension: 170,
            friction: 20
        },

        reset: true
    })

    const springPropsExit = useSpring({
        opacity: 0,
        left: "-225px",
        display: "none",

        from: {
            opacity: 1,
            left: "0px"
        },
        config: {
            mass: 1,
            tension: 170,
            friction: 20
        },

        reset: true
    })

    const trailProps = useTrail(6, {
        opacity: 1,
        marginTop: "0px",

        from: {
            opacity: 0,
            marginTop: "-25px"
        },

        config: {
            mass: 1,
            tension: 170,
            friction: 15,
        },

        reset: true
    })

    const trailPropsExit = useTrail(6, {
        opacity: 0,
        display: "none",

        from: {
            opacity: 1
        },

        config: {
            mass: 1,
            tension: 170,
            friction: 15
        },

        reset: true
    })

    console.log(todayForecast);
    
    return(
        <div style={{display: todayForecast[0].id === undefined ? "none" : null}} className="container">
            <div className="today-card-container">
                    <animated.div style={animate === true ? springProps : springPropsExit} className="card">
                        <Card
                            day={todayForecast[0].day}
                            timeOfDay={isDay}
                            temp={todayForecast[0].temp}
                            cloudType={todayForecast[0].cloudsType}
                            clouds={todayForecast[0].clouds}
                            high={todayForecast[0].high}
                            low={todayForecast[0].low}
                        />
                    </animated.div>
            </div>

            <div className="cards-container">
                {forecasts.map((forecast, index) => (
                     <animated.div style={animate === true ? trailProps[index] : trailPropsExit[index]} key={index} className="card">
                        <Card
                            day={forecast.day}
                            timeOfDay={forecast.timeOfDay}
                            temp={forecast.temp}
                            cloudType={forecast.cloudsType}
                            clouds={forecast.clouds}
                            high={forecast.high}
                            low={forecast.low}
                        />
                 </animated.div>
                ))
                }
            </div>
        </div>
    );
};

export default Forecast;