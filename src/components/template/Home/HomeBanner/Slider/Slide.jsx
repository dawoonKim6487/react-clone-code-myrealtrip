import React from 'react'
import tw from 'tailwind-styled-components';

const SlideStyle = tw.div`
    bg-slate-400
    h-[150px]
    lg:h-[350px]
    rounded
    drop-shadow-md
`

const Slide = ({ children }) => {
    return (
        <div className='pr-2'>
            <SlideStyle>{children}</SlideStyle>
        </div>
    )
}

export default Slide;