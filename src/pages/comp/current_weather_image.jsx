import React, { useEffect, useState } from "react";
import { currentWeather } from "../../service/apiReq";

const CurrentWeatherImg = (props) => {
  const location = props.location;

  const [backgroundStyle, setBackgroundStyle] = useState({
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
  });

  const evaluateWeather = (weather) => {
    if (weather.includes("Clouds")) {
      setBackgroundStyle({
        ...backgroundStyle,
        backgroundImage:
          " url(https://c.pxhere.com/photos/6f/47/sky_cloud_blue_blue_sky_cloud_cloud_sky_sky_clouds_sun_day-599259.jpg!d)",
      });
    } else if (weather.includes("Rain")) {
      setBackgroundStyle({
        ...backgroundStyle,
        backgroundImage:
          " url(https://th.bing.com/th/id/R.16cd4ca403d78d4d9973b016773ef8be?rik=sFMnJ0WWDNihCw&riu=http%3a%2f%2f4.bp.blogspot.com%2f_3V-U79ZO1zc%2fS4xXRtdLobI%2fAAAAAAAABhU%2fdBnTFrB33NI%2fs400%2fspring%2brain%2brelaxation.jpg&ehk=jwXazeJh7tm5CETn2qTsFvMXwOLOcI926xgaXMv5boQ%3d&risl=&pid=ImgRaw&r=0)",
      });
    } else if (weather.includes("Clear")) {
      setBackgroundStyle({
        ...backgroundStyle,
        backgroundImage:
          " url(https://th.bing.com/th/id/OIP.BVXNP7fkoRKawMvXGszTRgHaE6?pid=ImgDet&rs=1)",
      });
    } else {
      return "Unknown weather";
    }
  };

  useEffect(() => {
    currentWeather(location.lat, location.lon)
      .then((res) => {
        evaluateWeather(String(res.data.weather.at(0).main));
      })
      .catch();
  }, [props]);

  return <div style={backgroundStyle}></div>;
};

export default CurrentWeatherImg;
