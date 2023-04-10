import { Alert, Button, Col, Dropdown, Image, Menu, Row, Space } from "antd";
import SliderShow from "./slider/slider_show";
import Search from "antd/es/input/Search";
import ImageSrc from "./1.png";
import CurrentWeather from "./comp/current_weather";
import DropDownCustomCustom from "./dropdown_place/dropdown_place";
import { useEffect, useState } from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { hourWeather, searchCity } from "../service/apiReq";
import { showMessage } from "../utils";
import { C_TEMP, F_TEMP, K_TEMP } from "../enum";

const MainPage = () => {
  const [tempType, setTempType] = useState(F_TEMP);
  const [location, setLocation] = useState({
    lat: 21.0294498,
    lon: 105.8544441,
    name: "Ha Noi",
  });
  const onSearch = (value) => {
    searchCity(value)
      .then((res) => {
        console.log(res);
        if (res.data) {
          setLocation({
            lat: res.data.at(0).lat,
            lon: res.data.at(0).lon,
            name: res.data.at(0).name,
          });
        } else {
          showMessage(false, "city not found!");
        }
      })
      .catch((e) => {
        showMessage(false, "city not found!");
      });
  };
  const [daySelection, setDaySelection] = useState();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const renderFiveDaysNext = () => {
    const today = new Date();
    const nextFiveDays = [];
    nextFiveDays.push(today);
    for (let i = 1; i <= 5; i++) {
      const nextDay = new Date(today.getTime() + (i - 1) * 24 * 60 * 60 * 1000);
      let tempItem = {
        key: i,
        label: nextDay.toDateString(),
      };
      nextFiveDays.push(tempItem);
    }
    setItems(nextFiveDays);
  };
  const [dayData, setDayData] = useState();
  const weatherOfDay = (index) => {
    let newData = [];
    switch (index) {
      case "1":
        newData = dataWeather.slice(0, 8);

        break;
      case "2":
        newData = dataWeather.slice(8, 16);
        break;
      case "3":
        newData = dataWeather.slice(16, 24);
        break;
      case "4":
        newData = dataWeather.slice(24, 32);
        break;
      case "5":
        newData = dataWeather.slice(32, 40);
        break;
      default:
        break;
    }
    setDayData(newData);
  };
  function handleClickMenuDays(e) {
    setDaySelection(items[e.key].label);
    weatherOfDay(e.key);
    setOpen(false);
  }
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  const [dataWeather, setDataWeather] = useState();
  const handleClickSwitchTemp = () => {
    if(tempType===F_TEMP){
      setTempType(C_TEMP)
    }else{
      setTempType(F_TEMP)
    }
  };
  useEffect(() => {
    renderFiveDaysNext();
    hourWeather(location.lat, location.lon)
      .then((res) => {
        setDataWeather(res.data.list);
      })
      .catch();
  }, [location.lat, location.lon]);

  return (
    <div style={{ backgroundColor: "#1f4b8b" }}>
      <div className="searchbar" style={{ backgroundColor: "dodgerblue" }}>
        <Row justify={"start"} style={{ padding: "30px" }}>
          <Col span={3}>
            <Image
              src={ImageSrc}
              alt=""
              style={{ width: "70px", height: "100%" }}
            />
          </Col>

          <Col span={5} offset={7}>
            <Search
              placeholder="input city to show weather"
              onSearch={onSearch}
              enterButton
              allowClear
              size="large"
            />
          </Col>
          <Col span={3} offset={6}>
            <Button
              style={{ marginLeft: "5px" }}
              onClick={handleClickSwitchTemp}
            >
              {" "}
              Switch °C/°F
            </Button>
          </Col>
        </Row>
      </div>
      <div className="dropdown-place" style={{ margin: "30px" }}>
        <Row justify={"start"}>
          <Col
            span={5}
            style={{ textDecoration: "none", color: "white", fontSize: "25px" }}
          >
            {location.name}
          </Col>
        </Row>
      </div>
      <div className="main-content-container">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify={"center"}>
          <Col span={14}>
            <CurrentWeather location={location} typeOfTemp={tempType} />
          </Col>

          <Col span={7}>
            <div style={{ height: "500px", backgroundColor: "red" }}></div>
          </Col>
        </Row>
        <div
          style={{
            color: "white",
            fontSize: "30px",
            display: "flex",
            justifyContent: "start",
            marginTop: "20px",
            marginLeft: "9%",
            marginBottom: "20px",
          }}
        >
          <Dropdown
            menu={{
              items,
              onClick: handleClickMenuDays,
            }}
            onOpenChange={handleOpenChange}
            open={open}
          >
            <Space>
              <div style={{ fontSize: "29px" }}>5 days next</div>
              <DownOutlined style={{ color: "white", fontSize: "14px" }} />
              <div style={{ fontSize: "29px" }}>
                {daySelection ? daySelection : ""}
              </div>
            </Space>
          </Dropdown>
        </div>
        <div style={{ width: "87.3%", display: "inline-block" }}>
          {dayData ? <SliderShow typeOfTemp={tempType} dayData={dayData} /> : ""}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
