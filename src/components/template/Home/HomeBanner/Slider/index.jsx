import React from 'react'
import Slide from './Slide'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
    return (
        <>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.8,
                        },
                        620: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide><Slide>12</Slide></SwiperSlide>
                    <SwiperSlide><Slide>12</Slide></SwiperSlide>
                    <SwiperSlide><Slide>12</Slide></SwiperSlide>
                    <SwiperSlide><Slide>12</Slide></SwiperSlide>
                    <SwiperSlide><Slide>12</Slide></SwiperSlide>
                    <SwiperSlide><Slide>12</Slide></SwiperSlide>
                    <SwiperSlide><Slide>12</Slide></SwiperSlide>
                    <SwiperSlide><Slide>12</Slide></SwiperSlide>
                    <SwiperSlide><Slide>12</Slide></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Slider;