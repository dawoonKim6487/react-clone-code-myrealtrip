import React from 'react';
import { useInView } from "react-intersection-observer";
import tw from 'tailwind-styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import BeatLoader from "react-spinners/BeatLoader";

const Wrap = tw.div`
    ease-in
    duration-500
    opacity-0
    h-full
    py-5
    ${(props) => props.$active && 'opacity-1'}
`

const List = tw.div`
    bg-slate-300
    flex-1
    py-2
    h-[200px]
    rounded
    flex
    just
    justify-center
    items-center

`

const Spinner = () => <BeatLoader color='#36D7B7' />

const ScrollList = ({ id }) => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });

    const [view, setView] = React.useState(false)
    React.useEffect(() => {
        inView === true && setView(inView)
    }, [inView])

    return (
        <Wrap $active={view} ref={ref}>
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
            >
                <SwiperSlide>
                    <List><Spinner /></List>
                </SwiperSlide>
                <SwiperSlide>
                    <List><Spinner /></List>
                </SwiperSlide>
                <SwiperSlide>
                    <List><Spinner /></List>
                </SwiperSlide>
                <SwiperSlide>
                    <List><Spinner /></List>
                </SwiperSlide>
                <SwiperSlide>
                    <List><Spinner /></List>
                </SwiperSlide>
            </Swiper>
        </Wrap>
    )
}

export default ScrollList;
