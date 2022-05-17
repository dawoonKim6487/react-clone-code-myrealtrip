import React, { useState } from 'react';
import { Header, ModalWrap, ModalBar, MoSearchModal } from '../common';
import { HeaderInput } from './Home';

const HomeLayout = () => {
    const [barOpen, setBarOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    const modalOpener = () => {
        setBarOpen(!barOpen)
    }

    const searchOpener = () => {
        setSearchOpen(!searchOpen)
    }

    return (
        <div className='wrap'>
            <MoSearchModal on={searchOpen} closer={searchOpener} />
            <ModalWrap on={barOpen} onClick={modalOpener}>
                <ModalBar />
            </ModalWrap>
            <Header onModal={modalOpener} onSearch={searchOpener} />
            <HeaderInput />
        </div>
    )

}

export default HomeLayout