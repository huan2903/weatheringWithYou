import { Col, Image, Row } from "antd";
import React from "react";
import { iconWeatherFunc } from "../../../service/apiReq";
import { C_TEMP, F_TEMP, K_TEMP } from "../../../enum";
import { convertTempKToC, convertTempKToF } from "../../../utils";

const ItemSlider = (props) => {
  const item = props.item;
  const type = props.type;
  const convertDate = (dt) => {
    const date = new Date(Number(dt) * 1000);

    const customFormat = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`;
    return customFormat;
  };
  return (
    <div
      style={{
        height: "300px",
        background: "rgb(255,255,255,0.1)",
        margin: "10px",
      }}
    >
      <Row>
        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "30px",
            color: "white",
          }}
        >
          {convertDate(item.dt)}
        </Col>
        <Col span={12}>
          <div className="RowTempIcon">
            <Image
              rootClassName="Img-weather"
              style={{
                display: "flex",
                width: "170px",
              }}
              src={iconWeatherFunc(item.weather.at(0).icon)}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12} style={{ textAlign: "start" }}>
          <div style={{ marginLeft: "20%", fontSize: "35px", color: "white" }}>
            {item.weather.at(0).main}
          </div>
          <div style={{ marginLeft: "20%", fontSize: "15px", color: "white" }}>
            {item.weather.at(0).description}
          </div>
        </Col>
        <Col span={12} style={{ fontSize: "50px", color: "white" }}>
          <span style={{ display: "flex", marginLeft: "13%" }}>
          {
           type===F_TEMP? convertTempKToF(item.main.temp) : convertTempKToC(item.main.temp)
          }
             {type}
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default ItemSlider;
