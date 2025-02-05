// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { updateData } from "../../utils/functions";

const Slider = ({ attributes, setAttributes }) => {
  const { sliders } = attributes || [];
  console.log(sliders);
  const from = "server"
  return (
    <div className="slider">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {sliders?.map((slider, index) => {
          const {heading, description} = slider
          return(
            <SwiperSlide key={index}>
              {
                from==="server"?<>
                <RichText
                tagName="h1"
                placeholder={__("Header...")}
                value={heading}
                onChange={(value)=>setAttributes({sliders:updateData(sliders, value, index, "heading")})}
              />
                <RichText
                tagName="p"
                placeholder={__("Description...")}
                value={description}
                onChange={(value)=>setAttributes({sliders:updateData(sliders, value, index, "description")})}
              />
              </>:<>
              
            <h1>{heading}</h1>
            <p>{description}</p>
              </>
              }
          </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
