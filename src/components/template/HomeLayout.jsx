import React, { useState } from 'react';
import { Header, ModalWrap, ModalBar } from '../common';
import { HeaderInput } from './Home';

const HomeLayout = () => {
    const [modal, setModal] = useState(false)
    const modalOpen = () => {
        setModal(!modal)
    }
    return (
        <div className='wrap'>
            <ModalWrap on={modal} onClick={modalOpen}>
                <ModalBar>
                    <div onClick={modalOpen}>닫기</div>
                </ModalBar>
            </ModalWrap>
            <Header onModal={modalOpen} />
            <HeaderInput />
        </div>
    )

}

export default HomeLayout