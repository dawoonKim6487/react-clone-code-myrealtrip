import React from 'react';
import tw from 'tailwind-styled-components';

const SliderInner = tw.div`
    bg-slate-500
    h-[250px]
    rounded
    py-5
    lg:py-10
    px-8
    lg:py-16
    flex
    flex-col
    justify-center
`

const MoreBtn = tw.span`
    bg-white
    w-[75px]
    rounded
    p-2
    text-sm
    text-center
    cursor-pointer
`

const Slide = ({ children }) => {
    return (
        <SliderInner>
            <div className='mb-5'>
                {children}
            </div>
            <MoreBtn>자세히</MoreBtn>
        </SliderInner>
    )

}

export default Slide;