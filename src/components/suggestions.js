import React from "react";

function Suggestions({suggest, inputText, setInputText, getWeatherData}){
    function chooseLocation(location){
        setInputText(location);
    }
    var textbox = true;

    if(inputText === ""){
        textbox = false;
    }
    else{
        textbox = true;
    }
    return(
        <div className="suggestions-container" style={textbox === true ? {display: "block"} : {display: "none"}}>
            <div className="box">
                {suggest.map((suggestion, index) => (
                    <div key={index} className="searching-container" onMouseOver={() => chooseLocation(suggestion.city+", "+suggestion.state)} onClick={getWeatherData}>
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