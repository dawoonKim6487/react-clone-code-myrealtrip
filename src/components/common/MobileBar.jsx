import React from 'react'
import tw from 'tailwind-styled-components';
import { BsFillChatDotsFill } from "react-icons/bs";

const MoBarStyle = tw.div`
    h-full
    w-[50%]
    bg-white
    absolute
    text-center
    py-5
    ${props => props.position === 'r' ? 'right-0' : 'left-0'}
`
const BarSection = tw.section`
    py-5
    px-4
    border-b
`


const Text = tw.span`
    text-sm
`

const Btn = tw.div`
    py-3
    cursor-pointer
    font-bold
    rounded
    text-sm
`

const ModalBar = ({ position }) => {
    return (
        <MoBarStyle position={position}>
            <h1 className='text-2xl font-normal'>MyTripLogo</h1>
            <BarSection>
                <div className="flex flex-col gap-2">
                    <Btn className='border'>
                        로그인
                    </Btn>
                    <Btn className='bg-sky-300 text-white'>
                        회원가입
                    </Btn>
                </div>
            </BarSection>
            <BarSection>
                <div className="text-left">
                    <div className='flex items-center gap-2'>
                        <BsFillChatDotsFill color='#444' />
                        <Text>1:1 채팅 상담</Text>
                    </div>
                </div>
            </BarSection>
            <h2 className='py-5'>
                <Text>파트너 등록하기</Text>
            </h2>

        </MoBarStyle>
    )
}

ModalBar.defaultProps = {
    position: 'l',
    width: '50'
}

export default ModalBar;