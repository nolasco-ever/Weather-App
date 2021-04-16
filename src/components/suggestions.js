import React, {useState} from "react";

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

function Suggestions({suggest, inputText, setInputText, submitForm, setSubmitForm, getWeatherData}){
    function chooseLocation(location){
        setInputText(location);
    }

    function submitTheForm(){
        setSubmitForm(true);
        console.log(submitForm);
    }
    var textbox = true;

    if(inputText == ""){
        textbox = false;
    }
    else{
        textbox = true;
    }
    return(
        <div className="suggestions-container" style={textbox == true ? {display: "block"} : {display: "none"}}>
            <div className="box">
                {suggest.map((suggestion, index) => (
                    <div className="searching-container" onMouseOver={() => chooseLocation(suggestion.city+", "+suggestion.state)} onClick={getWeatherData}>
                        <p>{suggestion.city+", "+suggestion.state}</p>

                        {/* <div className="searching-info">
                            <p>{Math.round(suggestion.temp)}&deg;</p>
                            <img src={suggestion.weatherIcon} alt="weather-icon"/>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Suggestions;