import React from 'react'
import { AiOutlineRight } from "react-icons/ai";
import Slider from './Slider';
import { DeskTopWrap } from '@/styles'



const HomeBanner = () => {
    return (
        <div className='my-5 px-4 max-w-[1200px]'>
            <div className="tit flex justify-between items-center mb-5">
                <h2 className='text-2xl font-bold'>여행이 돌아왔어요!</h2>
                <span className='text-blue-400 flex items-center'>
                    격리 없는 여행지
                    <AiOutlineRight />
                </span>
            </div>
            <Slider />
        </div >

    )

}
export default HomeBanner;