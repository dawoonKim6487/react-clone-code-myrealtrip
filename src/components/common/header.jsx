import React from 'react';
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { IconBtn, DeskTopWrap } from '@/styles'
import { HeaderInput } from '../template/Home';
import tw from 'tailwind-styled-components';

const NavStyle = tw.li`
    pb-2
    text-sm
    border-b-4
    box-border
    border-transparent
    hover:border-sky-400
    cursor-pointer
`


const Header = ({ onModal, onSearch }) => {
    return (
        <header>
            <div className="flex lg:hidden justify-between items-center">
                <IconBtn onClick={onModal}>
                    <AiOutlineMenu size='24' color='#444444' />
                </IconBtn>
                <h1>MyTripLogo</h1>
                <IconBtn onClick={onSearch}>
                    <AiOutlineSearch size='24' color='#444444' />
                </IconBtn>
            </div>

            <div className="hidden lg:block">
                <DeskTopWrap className='flex justify-between items-center'>
                    <div className='flex items-center flex-1'>
                        <h1 className='text-2xl'>MyTripLogo</h1>
                        <div className='flex-1'>
                            <HeaderInput>
                                <input type="text"
                                    className='flex-1 bg-transparent outline-none placeholder:text-sm'
                                    placeholder='도시나 상품을 검색해보세요'
                                />
                            </HeaderInput>
                        </div>
                    </div>
                    <div className='flex justify-end flex-1 h-full gap-5 items-center'>
                        <div className='text-[#444] text-sm'>파트너 등록하기</div>
                        <div className='text-[#444] text-sm'>로그인</div>
                        <div className='text-[#444] py-2 px-5 border text-sm border-sky-300'>회원가입</div>
                    </div>
                </DeskTopWrap>
                <div className="head_nav border-b pt-4">
                    <DeskTopWrap className='flex justify-between items-center'>
                        <ul className='flex w-full gap-8'>
                            <NavStyle>홈</NavStyle>
                            <NavStyle>항공권</NavStyle>
                            <NavStyle>투어&middot;티켓</NavStyle>
                            <NavStyle>국내숙소</NavStyle>
                            <NavStyle>호캉스</NavStyle>
                            <NavStyle>렌터카</NavStyle>
                            <NavStyle>패키지</NavStyle>
                            <NavStyle>한인민박</NavStyle>
                            <NavStyle>해외호텔</NavStyle>
                            <NavStyle>할인혜택</NavStyle>
                            <NavStyle>아이와함께</NavStyle>
                        </ul>

                    </DeskTopWrap>
                </div>
            </div>
        </header>
    )

}

export default Header