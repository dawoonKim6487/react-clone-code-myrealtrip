import React from 'react';
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { IconBtn } from '@/styles'

const Header = ({ onModal, onSearch }) => {
    return (
        <header className='flex justify-between items-center'>
            <IconBtn onClick={onModal}>
                <AiOutlineMenu size='24' color='#444444' />
            </IconBtn>
            <div>MyTripLogo</div>
            <IconBtn onClick={onSearch}>
                <AiOutlineSearch size='24' color='#444444' />
            </IconBtn>
        </header>
    )

}

export default Header