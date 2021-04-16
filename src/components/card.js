import React from "react";

//Import all icons
import thunderstormDay from "./icons/thunderstorm-day.png";
import thunderstormNight from "./icons/thunderstorm-night.png";
import drizzleDay from "./icons/drizzle-day.png";
import drizzleNight from "./icons/drizzle-night.png";
import rainDay from "./icons/rain-day.png";
import rainNight from "./icons/rain-night.png";
import snowDay from "./icons/snow-day.png";
import snowNight from "./icons/snow-night.png";
import clearDay from "./icons/clear-day.png";
import clearNight from "./icons/clear-night.png";
import cloudyDay from "./icons/cloudy-day.png";
import cloudyNight from "./icons/cloudy-night.png";
import fogDay from "./icons/fog-day.png";
import fogNight from "./icons/fog-night.png";

function Card({key, timeOfDay, day, temp, cloudType, clouds, high, low}){
    var weatherIcon;

    // Assign weather icon depending on time of day and cloud type
    if(timeOfDay === true){
        switch(cloudType){
            case "Thunderstorm":
                weatherIcon = thunderstormDay;
                break;
            case "Drizzle":
                weatherIcon = drizzleDay;
                break;
            case "Rain":
                weatherIcon = rainDay;
                break;
            case "Snow":
                weatherIcon = snowDay;
                break;
            case "Clear":
                weatherIcon = clearDay;
                break;
            case "Clouds":
                weatherIcon = cloudyDay;
                break;
            default:
                weatherIcon = fogDay;
        }
    }
    else{
        switch(cloudType){
            case "Thunderstorm":
                weatherIcon = thunderstormNight;
                break;
            case "Drizzle":
                weatherIcon = drizzleNight;
                break;
            case "Rain":
                weatherIcon = rainNight;
                break;
            case "Snow":
                weatherIcon = snowNight;
                break;
            case "Clear":
                weatherIcon = clearNight;
                break;
            case "Clouds":
                weatherIcon = cloudyNight;
                break;
            default:
                weatherIcon = fogNight;
        }
    }

    return(
        <div className="cont">
            <h3 className="day">{day}</h3>

            <div className="temp-cloud-container">
                <h1 className="temp">{Math.round(temp)}&deg;</h1>
                <img className="cloud-icon" src={weatherIcon} alt="weather-icon"/>
            </div>

            <div className="info-container">
                <p className="clouds">{clouds}</p>

                <div className="high-low">
                    <div>
                        <p>High</p>
                        <p>{Math.round(high)}</p>
                    </div>
                    <div>
                        <p>Low</p>
                        <p>{Math.round(low)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;