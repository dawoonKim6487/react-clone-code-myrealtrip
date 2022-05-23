import React from 'react';
import { DeskTopWrap } from '@/styles'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import Slide from './Slide';

const HomeSlider = () => {
    const slideData = [
        { id: 0, tit: '커뮤니티 오픈!', desc: '궁금한 해외여행 정보 실시간 여행자가 바로답해줘요!', path: '' },
        { id: 1, tit: '이제 해외여행 갈 때 필수인 여행자 보험!', desc: '여행중 발생하는 사고에 대비하세요', path: '' }
    ]

    const autoOption = {
        delay: 2500,
        disableOnInteraction: false,
    }

    return (
        <DeskTopWrap>
            <Swiper
                pagination={true}
                modules={[Pagination, Autoplay]}
                autoplay={autoOption}>
                {
                    slideData.map((ele) => {
                        return (
                            <SwiperSlide
                            >
                                <Slide key={ele.id}>
                                    <h2 className='text-3xl text-white'>{ele.tit}</h2>
                                    <p className='text-white'>{ele.desc}</p>
                                </Slide>
                            </SwiperSlide>

                        )
                    })
                }
            </Swiper>
        </DeskTopWrap>
    )

}

export default HomeSlider;
