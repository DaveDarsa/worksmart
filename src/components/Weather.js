import React, { useState, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContextProvider";
import { getWeather } from "../utils/getWeather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
const Weather = () => {
  const [temp, setTemp] = useState(0);
  const [userInfo] = useContext(UserContext);

  const weather = getWeather(userInfo.city);
  weather.then((weatherValue) => {
    setTemp(weatherValue);
  });

  return (
    <StyledWeather className="weather">
      <div className="iconandtemp">
        <FontAwesomeIcon
          icon={faCloudSun}
          style={{ marginRight: ".5rem" }}
          className="icon"
        />

        <div className="temp">
          {temp}
          <sup>o</sup> F <br />
        </div>
      </div>
      {userInfo.city}
    </StyledWeather>
  );
};

const StyledWeather = styled.div`
  font-family: "Lato", sans-serif;
  color: white;
  margin-bottom: -5rem;
  transform: translateX(5rem);
  font-size: 2rem;
  width: fit-content;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon {
    /* align-self: flex-start;
    justify-self: flex-end;
    margin-top: 0.5rem; */
  }
  .iconandtemp {
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
  }
  .cityntemp {
    /* display: flex;
    align-items: flex-start;
    flex-direction: column; */
  }
  sup {
    font-size: 1.5rem;
  }
`;

export default Weather;
