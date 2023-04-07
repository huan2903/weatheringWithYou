import React, { useEffect, useMemo, useState } from "react";
import {
  currentWeather,
  iconWeatherFunc,
} from "../../service/apiReq";
import { Col, Image, Row } from "antd";
import "../comp/currentcss.css";
import { F_TEMP } from "../../enum";
// import { currentWeather,iconWeather } from "../../service/apiReq";
function CurrentWeather(props) {
  const location = props.location;
  const [iconWeatherData, setIconWeatherData] = useState("");
  const [currentTemp, setCurrentTemp] = useState();
  const [feellike, setFeelLike] = useState("");
  const [weatherStatus, setWeatherStatus] = useState("");
  const [tempType, setTempType] = useState(F_TEMP);
  const [detailWeather, setDetailWeather] = useState({
    wind: "",
    humidity: "",
    visibility: "",
    pressure: "",
    base: "",
  });
  const [evaluateWeatherDi, setEvaluateWeatherDi] = useState();
  const time = new Date();
  const backgroundStyle = {
    backgroundImage:
      "url(https://c.pxhere.com/photos/6f/47/sky_cloud_blue_blue_sky_cloud_cloud_sky_sky_clouds_sun_day-599259.jpg!d)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
  };

  useEffect(() => {
    currentWeather(location.lat, location.lon)
      .then((res) => {
        console.log(res);
        setIconWeatherData(res.data.weather.at(0).icon);
        setCurrentTemp(Math.round(res.data.main.temp));
        setFeelLike(Math.round(res.data.main.feels_like));
        setWeatherStatus(res.data.weather.at(0).main);
        setEvaluateWeatherDi(
          EvaluateWeather(String(res.data.weather.at(0).main))
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
  }, []);
  const EvaluateWeather = (weather) => {
    if (weather.includes("Clouds")) {
      return "It's cloudy. The clouds floated by the wind blowing to the far far away sky. ";
    } else {
      return "Unknown weather";
    }
  };

  const weatherImageLink = useMemo(() => {
    return iconWeatherFunc(iconWeatherData);
  }, [iconWeatherData]);

  return (
    <div style={backgroundStyle}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            height: "92%",
            width: "60%",
            background: "rgb(32,76,140,0.6)",
            opacity: 1,
            padding: "20px",
          }}
        >
          <strong
            style={{
              color: "white",
              opacity: 1,
              display: "flex",
              fontSize: "20px",
              marginTop: "14px",
              marginLeft: "14px",
            }}
          >
            Current Weather
          </strong>
          <p
            style={{
              color: "white",
              display: "flex",
              marginLeft: "14px",
              marginTop: "5px",
            }}
          >
            {time.toLocaleTimeString()}
          </p>
          <div className="RowTempIcon">
            <Image
              rootClassName="Img-weather"
              style={{
                display: "flex",
                marginLeft: "14px",
                marginTop: "5px",
              }}
              src={weatherImageLink}
            />
            <div className="current-temp">{currentTemp}</div>
            <div className="current-temp" style={{ fontSize: "50px" }}>
              {tempType}
            </div>
            <div className="main-weather-text">
              <div> {weatherStatus}</div>
              <div style={{ fontSize: "20px" }}>Feel-like: {feellike}° </div>
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
