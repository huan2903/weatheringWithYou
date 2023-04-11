import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ItemSlider from "./slider_comp/item_display";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
};

const SliderShow = (props) => {
  const [dayData, setDayData] = useState(props.dayData);
  const [mapList, setMapList] = useState([]);
  const tempType = props.typeOfTemp;

  const settings = {
    className: "slider variable-width",
    dots: false,
    speed: 500,
    rows: 1,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1670,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  useEffect(() => {
    setDayData(props.dayData);
  }, [props.dayData]);

  useEffect(() => {
    setMapList(
      dayData.map((item) => (
        <div className="slick-slide" style={{ width: "520px" }}>
          <ItemSlider type={tempType} item={item} />
        </div>
      ))
    );
  }, [dayData, tempType, props.dayData]);

  return <div>{dayData ? <Slider {...settings}>{mapList}</Slider> : ""}</div>;
};
export default SliderShow;
