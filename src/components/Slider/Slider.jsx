import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import s from "./Slider.module.scss";

function Slider({ slides = [] }) {
  const [swiper, setSwiper] = useState(null);

  const onPrev = () => {
    swiper.slidePrev();
  };

  const onNext = () => {
    swiper.slideNext();
  };

  return (
    <div className={s.slider}>
      <div className={s.topPart}>
        <div className={s.title}>Фото кортов</div>
        <div className={s.buttons}>
          <button className={s.button} onClick={onPrev}>
            prev
          </button>
          <button className={s.button} onClick={onNext}>
            next
          </button>
        </div>
      </div>
      <div className={s.swiperWrapper}>
        <Swiper
          loop
          grabCursor
          className={s.swiper}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
        >
          {slides.map((elem) => (
            <SwiperSlide className={s.slide} key={elem.id}>
              {elem.image && (
                <img className={s.image} src={elem.image} alt="" />
              )}
              {elem.description && (
                <div className={s.subtitle}>{elem.description}</div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
