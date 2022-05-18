import React from 'react'
import tw from 'tailwind-styled-components';

const SlideStyle = tw.div`
    bg-slate-400
    h-[175px]
    lg:h-[350px]
    rounded-xl
    drop-shadow-md
    p-5
    box-border
    flex
    flex-col
    justify-between
`
const SpanStyle = tw.span`
    bg-teal-500
    text-white
    p-1
    rounded
    text-sm
`
const Slide = ({ children, data }) => {
    const { etc, count } = data;
    return (
        <SlideStyle>
            <div>
                <h3 className='flex items-center gap-2 text-2xl font-bold text-white mb-2'>{children}
                    {!etc && <SpanStyle className='hidden lg:inline'>
                        격리없음
                    </SpanStyle>
                    }
                </h3>
                <p className='hidden lg:block text-white text-xl'>{count}여 개의 여행 상품</p>
            </div>
            <p>
                <div className='hidden lg:block bg-white py-2 w-1/3 text-center rounded text-sm'>
                    둘러보기
                </div>
                {!etc &&
                    <SpanStyle className='lg:hidden'>
                        격리없음
                    </SpanStyle>
                }
            </p>
        </SlideStyle>
    )
}

Slide.defaultProps = {
    data: {
        cate: false
    }
}
export default Slide;