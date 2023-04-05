import { Button, Col, Image, Row } from "antd";
import React, { useState } from "react";
import SliderShow from "./slider/slider_show";
import ItemSlider from "./slider/slider_comp/item_display";
import ItemSliderSP from "./slider/slider_comp/item_display_spand";
import Slider from "react-slick";
import Search from "antd/es/input/Search";
import DropDpowCustom from "./dropdown_place/dropdown_place";
import ImageSrc from "./1.png";
import CurrenWeather from "./comp/curren_weather";

const MainPage = () => {
  const onSearch = (value) => console.log(value);
  return (
    <div style={{ backgroundColor: "#1f4b8b" }}>
      <div className="searchbar" style={{ backgroundColor: "dodgerblue" }}>
        <Row justify={"start"} style={{ padding: "30px" }}>
          <Col span={3}>
            <Image
              src={ImageSrc}
              alt="phet"
              style={{ width: "70px", height: "100%" }}
            />
          </Col>

          <Col span={5} offset={7}>
            <Search
              placeholder="input place to show weather"
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
            <DropDpowCustom/>
          </Col>
        </Row>
      </div>
      <div className="main-content-container">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify={"center"}>
          <Col span={14}>
          <CurrenWeather/>
          </Col>

          <Col span={7}>
            <div style={{ height: "500px", backgroundColor: "red" }}></div>
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{ marginTop: "10px" }} justify={"center"}>
          <Col span={4}>
            <div style={{ height: "100px", backgroundColor: "red" }}></div>
          </Col>
          <Col span={4}>
            <div style={{ height: "100px", backgroundColor: "red" }}></div>
          </Col>
          <Col span={4}>
            <div style={{ height: "100px", backgroundColor: "red" }}></div>
          </Col>
        </Row>
        <div style={{ width: "88%", display: "inline-block" }}>
          <SliderShow />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
