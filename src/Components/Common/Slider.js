import React, { useEffect, useRef } from "react";
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "animate.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Keyboard,
  Mousewheel,
  EffectFade,
  EffectFlip,
  EffectCreative,
  EffectCards,
} from "swiper/modules";
import { updateData } from "../../utils/functions";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import "swiper/css/effect-cards";

const Slider = ({ attributes, setAttributes, from }) => {
  const { sliders, options } = attributes || [];
  const {
    autoPlay,
    navigationBtn,
    loop,
    scrollBar,
    simulateTouch,
    keyboardControl,
    mouseWheel,
    textAnimation,
    animationDuration,
    isAnimation,
    pagination,
    slideEffects,
    slideDirection,
    grabCursor,
  } = options || {};
  const {
    status: pageStatus,
    clickable,
    dynamicBullets,
    type,
  } = pagination || {};
  const { isAutoPlay, delay, disableOnInteraction } = autoPlay;
  const { status, icon } = navigationBtn;
  const swiperRef = useRef(null);

  const autoPlayConfig = isAutoPlay ? { delay, disableOnInteraction } : "";
  const paginationConfig = pageStatus
    ? type
      ? { clickable, dynamicBullets, type }
      : { clickable, dynamicBullets }
    : "";
  useEffect(() => {
    if (!isAnimation) {
      return;
    } else if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      swiperInstance.on("slideChange", () => {
        const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
        const animatedElements = activeSlide.querySelectorAll(".AE");

        animatedElements.forEach((element) => {
          element.classList.add(
            "animate__animated",
            textAnimation,
            animationDuration
          );

          setTimeout(() => {
            element.classList.remove(
              "animate__animated",
              textAnimation,
              animationDuration
            );
          }, 3000);
        });
      });
    }
  }, [
    textAnimation,
    autoPlay,
    navigationBtn,
    loop,
    scrollBar,
    simulateTouch,
    keyboardControl,
    mouseWheel,
    animationDuration,
    isAnimation,
    pageStatus,
    clickable,
    dynamicBullets,
    type,
    slideEffects,
    slideDirection,
    grabCursor,
  ]);

  return (
    <div className="slider">
      <Swiper
        ref={swiperRef}
        onSwiper={(swiper) => {
          if (icon) {
            const prevBtn = swiper.navigation.prevEl;
            if (prevBtn) {
              prevBtn.innerHTML = icon;
              prevBtn.classList.add("custom-swiper-btn");
            }
            const nextBtn = swiper.navigation.nextEl;
            if (nextBtn) {
              nextBtn.innerHTML = icon;
              nextBtn.classList.add("custom-swiper-btn");
            }
          }
        }}
        key={`${isAutoPlay}-${delay}-${disableOnInteraction}-${status}-${icon}-${loop}-${scrollBar}-${simulateTouch}-${keyboardControl}-${mouseWheel}-${textAnimation}-${animationDuration}-${isAnimation}-${pageStatus}-${clickable}-${dynamicBullets}-${type}-${slideEffects}-${slideDirection}-${grabCursor}`}
        effect={`${slideEffects}`}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        autoplay={autoPlayConfig}
        simulateTouch={simulateTouch}
        navigation={status}
        grabCursor={grabCursor}
        // spaceBetween={30}
        // scrollbar={{ hide: scrollBar }}
        pagination={paginationConfig}
        loop={loop}
        direction={`${slideDirection}`}
        keyboard={{ enabled: keyboardControl }}
        mousewheel={mouseWheel}
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          Autoplay,
          Keyboard,
          Mousewheel,
          EffectFade,
          EffectFlip,
          EffectCreative,
          EffectCards,
        ]}
        className="mySwiper"
      >
        {sliders?.map((slider, index) => {
          const { heading, description, button } = slider;

          return (
            <SwiperSlide
              className={`swiper-slide swiper-slide-${index}`}
              key={index}
            >
              <div className="content">
                {from === "server" ? (
                  <>
                    <RichText
                      className="header AE"
                      tagName="h1"
                      placeholder={__("Header...")}
                      value={heading}
                      onChange={(value) =>
                        setAttributes({
                          sliders: updateData(sliders, value, index, "heading"),
                        })
                      }
                    />
                    <RichText
                      className="description AE"
                      tagName="p"
                      placeholder={__("Description...")}
                      value={description}
                      onChange={(value) =>
                        setAttributes({
                          sliders: updateData(
                            sliders,
                            value,
                            index,
                            "description"
                          ),
                        })
                      }
                    />
                  </>
                ) : (
                  <>
                    <h1 className="header AE">{heading}</h1>
                    <p className="description AE">{description}</p>
                  </>
                )}
                  <a
                    href={button.url}
                    target={button.newTab ? "_blank" : "_self"}
                    rel="noreferrer"
                  >
                    {button.isButton && (
                      <button className="linkBtn AE">{button.label}</button>
                    )}
                  </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
