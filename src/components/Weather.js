import React, { useState } from "react";
import styled from "styled-components";
import { getWeather } from "../utils/getWeather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
const Weather = () => {
  const [temp, setTemp] = useState(0);

  const weather = getWeather("Tbilisi");
  weather.then((weatherValue) => {
    setTemp(weatherValue);
  });

  return (
    <StyledWeather className="weather">
      <FontAwesomeIcon icon={faCloudSun} style={{ marginRight: ".2rem" }} />
      {temp} F <br />
      London
    </StyledWeather>
  );
};

const StyledWeather = styled.div`
  color: white;
  margin-bottom: -5rem;
  transform: translateX(5rem);
  font-size: 2rem;
  width: fit-content;
  margin-left: auto;
`;

export default Weather;
