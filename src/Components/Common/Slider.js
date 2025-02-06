// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { updateData } from "../../utils/functions";



const Slider = ({ attributes, setAttributes, from }) => {
  const { sliders, options } = attributes || [];
  const{autoPlay, navigationBtn, loop}=options || {}
  const { isAutoPlay, delay, disableOnInteraction } = autoPlay;
  const autoPlayConfig = isAutoPlay
  ? {
    delay,
    disableOnInteraction,
    }
  : "";
const {status, icon}=navigationBtn

  return (
    <div className="slider">
      <Swiper 
      onSwiper={(swiper) => {
        if (icon) {
          // Update previous button
          const prevBtn = swiper.navigation.prevEl;
          if (prevBtn) {
            prevBtn.innerHTML =  `${icon}`;
            prevBtn.classList.add("custom-swiper-btn");
          }

          // Update next button
          const nextBtn = swiper.navigation.nextEl;
          if (nextBtn) {
            nextBtn.innerHTML = `${icon}`;
            nextBtn.classList.add("custom-swiper-btn");
          }
        }
      }}
      key={`${isAutoPlay}-${delay}-${disableOnInteraction}-${status}-${icon}-${loop}`}
      autoplay={autoPlayConfig}
      simulateTouch={true}
      // rewind={true}
      navigation={status} 
      spaceBetween={30}
      scrollbar={{
        hide: false,
      }}
      pagination={{
        type: 'fraction',
        clickable: true,
        dynamicBullets: true,
      }}
      loop={loop}
      direction={'vertical'}
      modules={[Navigation, Pagination , Scrollbar, Autoplay]} 
      className="mySwiper">
        {sliders?.map((slider, index) => {
          const {heading, description, button} = slider
          // console.log(button.url);
          
          return(
            <SwiperSlide className={`swiper-slide swiper-slide-${index}`} key={index}>
              <div className="content">
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
              <a href={button.url} target="_blank" rel="noreferrer">
              <button className="button">{button.label}</button>
              </a>
              </div>
          </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
