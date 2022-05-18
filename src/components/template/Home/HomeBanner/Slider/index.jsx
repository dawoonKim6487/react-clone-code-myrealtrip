import React from 'react'
import Slide from './Slide'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
    const SliderData = [
        {
            id: 0, name: '파리', background: "", etc: true, count: 550
        },
        {
            id: 1, name: '라스베가스', background: "", etc: false, count: 650
        },
        {
            id: 2, name: '제주도', background: "", etc: true, count: 700
        },
        {
            id: 3, name: '베트남', background: "", etc: false, count: 2200
        },
        {
            id: 4, name: '서울', background: "", etc: false, count: 2850
        }
    ]
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
                            slidesPerView: 2.8,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    className="mySwiper"
                >
                    {SliderData.map((ele) => {
                        return (
                            <SwiperSlide key={ele.id}>
                                <Slide data={ele}>{ele.name}</Slide>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    )
}

export default Slider;