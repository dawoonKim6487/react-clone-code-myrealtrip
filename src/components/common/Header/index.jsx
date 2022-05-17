import React from 'react';
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { IconBtn } from '@/styles'
import tw from 'tailwind-styled-components';
import LgHead from './LgHead';

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
                <LgHead />
            </div>
        </header>
    )

}

export default Header