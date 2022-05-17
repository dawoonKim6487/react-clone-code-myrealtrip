import React from 'react';
import tw from 'tailwind-styled-components';
import { AiOutlineClose } from "react-icons/ai";
import { IconBtn } from '@/styles'
import { HeaderInput } from '../template/Home';

const ModalWrap = tw.div`
    w-full h-full fixed bg-white
`
const MoSearchModal = ({ on, closer }) => {
    return (
        <>
            {on &&
                <ModalWrap>
                    <IconBtn onClick={closer}>
                        <AiOutlineClose size='24' color='#444444' />
                    </IconBtn>
                    <HeaderInput />
                </ModalWrap>
            }
        </>
    )
}


export default MoSearchModal;