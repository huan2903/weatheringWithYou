import React, { useEffect, useMemo, useState } from "react";
import { currentWeather, iconWeatherFunc } from "../../service/apiReq";
import { Col, Image, Row } from "antd";
import "../comp/current_Css.css";
import { F_TEMP } from "../../enum";
import { convertTempKToC, convertTempKToF } from "../../utils";
function CurrentWeather(props) {
  const location = props.location;
  const typeOfTemp = props.typeOfTemp;
  const [iconWeatherData, setIconWeatherData] = useState("");
  const [currentTemp, setCurrentTemp] = useState();
  const [feelLike, setFeelLike] = useState("");
  const [weatherStatus, setWeatherStatus] = useState("");
  const [evaluateWeatherDi, setEvaluateWeatherDi] = useState();
  const [detailWeather, setDetailWeather] = useState({
    wind: "",
    humidity: "",
    visibility: "",
    pressure: "",
    base: "",
  });
  const time = new Date();
  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    background: "rgb(32,76,140,0.6)",
  };

  const evaluateWeather = (weather) => {
    if (weather.includes("Clouds")) {
      return "It's cloudy. The clouds floated by the wind blowing to the far far away sky. ";
    } else if (weather.includes("rain")) {
      return "It's rain. We can't go outside camping now T^T.";
    } else if (weather.includes("clear")) {
      return "It's clear as ur brain when coding more than 180 min.";
    } else {
      return "Unknown weather";
    }
  };

  useEffect(() => {
    currentWeather(location.lat, location.lon)
      .then((res) => {
        setIconWeatherData(res.data.weather.at(0).icon);
        setCurrentTemp(Math.round(res.data.main.temp));
        setFeelLike(Math.round(res.data.main.feels_like));
        setWeatherStatus(res.data.weather.at(0).main);
        setEvaluateWeatherDi(
          evaluateWeather(String(res.data.weather.at(0).main))
        );
        setDetailWeather({
          wind: res.data.wind.speed + " km/h",
          humidity: res.data.main.humidity + "%",
          visibility: res.data.visibility + " m",
          pressure: res.data.main.pressure + " mb",
          base: res.data.base,
        });
      })
      .catch();
  }, [location]);

  const weatherImageLink = useMemo(() => {
    return iconWeatherFunc(iconWeatherData);
  }, [iconWeatherData]);

  return (
    <div style={backgroundStyle}>
      <div className="container-current-weather">
        <div className="content-weather">
          <strong className="title">Current Weather</strong>
          <p className="time-title">{time.toLocaleTimeString()}</p>
          <div className="row-temp-icon">
            <Image
              rootClassName="img-weather"
              style={{
                display: "flex",
                marginLeft: "14px",
                marginTop: "5px",
              }}
              src={weatherImageLink}
            />
            <div className="current-temp">
              {typeOfTemp === F_TEMP
                ? convertTempKToF(currentTemp)
                : convertTempKToC(currentTemp)}
            </div>
            <div className="current-temp" style={{ fontSize: "50px" }}>
              {typeOfTemp}
            </div>
            <div className="main-weather-text">
              <div> {weatherStatus}</div>
              <div style={{ fontSize: "20px" }}>Feel-like: {feelLike}° </div>
            </div>
          </div>
          <div className="comment">{evaluateWeatherDi}</div>
          <Row className="row-status-detail">
            <Col className="item-current-weather" span={4}>
              <div className="item-detail-title">Wind:</div>
              <div className="item-detail">{detailWeather.wind}</div>
            </Col>
            <Col className="item-current-weather" span={4} offset={1}>
              <div className="item-detail-title">Visibility:</div>
              <div className="item-detail">{detailWeather.visibility}</div>
            </Col>
            <Col className="item-current-weather" span={4} offset={1}>
              <div className="item-detail-title">Pressure:</div>
              <div className="item-detail">{detailWeather.pressure}</div>
            </Col>
            <Col className="item-current-weather" span={4} offset={1}>
              <div className="item-detail-title">Humidity:</div>
              <div className="item-detail">{detailWeather.humidity}</div>
            </Col>
            <Col className="item-current-weather" span={4} offset={1}>
              <div className="item-detail-title">Base:</div>
              <div className="item-detail">{detailWeather.base}</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
