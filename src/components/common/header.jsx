import React from 'react';
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import tw from 'tailwind-styled-components';

const IconBtn = tw.div`
    cursor-pointer
    px-3
    py-4
`

const Header = ({ onModal }) => {
    return (
        <header className='flex justify-between items-center'>
            <IconBtn onClick={onModal}>
                <AiOutlineMenu size='24' color='#444444' />
            </IconBtn>
            <div>MyTripLogo</div>
            <IconBtn onClick={onModal}>
                <AiOutlineSearch size='24' color='#444444' />
            </IconBtn>
        </header>
    )

}

export default Header