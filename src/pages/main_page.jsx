import { Button, Col, Dropdown, Image, Row, Space } from "antd";
import SliderShow from "./slider/slider_show";
import Search from "antd/es/input/Search";
import ImageSrc from "./1.png";
import CurrentWeather from "./comp/current_weather";
import DropDownCustomCustom from "./dropdown_place/dropdown_place";
import { useEffect, useState } from "react";
import ThreeDayItem from "./comp/three_day_item";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";

const MainPage = () => {
  const onSearch = (value) => {};
  // const [location,setLocation] = useState();
  const location = {
    lat: 16.068,
    lon: 108.212,
  };
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];
  useEffect(() => {}, []);
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
            <Button style={{ marginLeft: "5px" }}> Switch °C/°F</Button>
          </Col>
        </Row>
      </div>
      <div className="dropdown-place" style={{ margin: "30px" }}>
        <Row justify={"start"}>
          <Col span={5}>
            <DropDownCustomCustom location={location} />
          </Col>
        </Row>
      </div>
      <div className="main-content-container">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify={"center"}>
          <Col span={14}>
            <CurrentWeather location={location} />
          </Col>

          <Col span={7}>
            <div style={{ height: "500px", backgroundColor: "red" }}></div>
          </Col>
        </Row>
        <div style={{ color: "white", fontSize: "30px" }}>
          Weather 3 days next:
        </div>
        <div>
        <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
        </div>
        <div style={{ width: "87.5%", display: "inline-block" }}>
          <SliderShow />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
