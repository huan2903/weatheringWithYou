import React from "react";
import Slider from "react-slick";
import ItemSlider from "./slider_comp/item_display";
import { useState } from "react";
import ItemSliderSP from "./slider_comp/item_display_spand";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const SliderShow = () => {
  const [expandItem, setExpandItem] = useState(false);
  const settings = {
    className: "slider variable-width",
    dots: false,
    speed: 500,
    rows:1,
    slidesToShow: 4,
    slidesToScroll:4,
    initialSlide: 0,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1670,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2,
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
 
  return (
    <div>
      <Slider {...settings}>
      <div style={{width:'520px'}}>
          <ItemSlider abc={0}/>
        </div>
        <div style={{width:'520px'}}>
          <ItemSlider abc={1}/>
        </div>
        <div style={{width:'520px'}}>
          <ItemSlider abc={2}/>
        </div>
        <div style={{width:'520px'}}> 
          <ItemSlider abc={3}/>
        </div>
        <div style={{width:'520px'}}>
          <ItemSlider abc={4}/>
        </div>
        <div style={{width:'520px'}}>
          <ItemSlider abc={5}/>
        </div>
        <div style={{width:'520px'}}>
          <ItemSlider abc={6}/>
        </div>
        <div style={{width:'520px'}}>
          <ItemSlider abc={7}/>
        </div>
      </Slider>
    </div>
  );
};

export default SliderShow;
