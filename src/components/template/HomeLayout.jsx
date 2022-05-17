import React, { useState } from 'react';
import { Header, ModalWrap } from '../common';
import { HeaderInput } from './Home';

const HomeLayout = () => {
    const [modal, setModal] = useState(false)
    const modalOpen = () => {
        setModal(!modal)
    }
    return (
        <div className='wrap'>
            <ModalWrap on={modal}>
                <div onClick={modalOpen}>닫기</div>
            </ModalWrap>
            <Header onModal={modalOpen} />
            <HeaderInput />
        </div>
    )

}

export default HomeLayout