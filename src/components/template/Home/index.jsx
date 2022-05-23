import React, { useState } from 'react';
import { Header, ModalWrap, ModalBar, MoSearchModal } from '@/components/common';
import { SearchInput } from "@/components/common"
import HomeBanner from './HomeBanner';
import MoNav from './MoNav';
import HomeSlider from './HomeSlider';
import { DeskTopWrap } from '@/styles'
import ScrollList from './ScrollList';

const HomeLayout = () => {
    const [barOpen, setBarOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);


    const modalOpener = () => {
        setBarOpen(!barOpen)
    }

    const searchOpener = () => {
        setSearchOpen(!searchOpen)
    }

    return (
        <>
            <MoSearchModal on={searchOpen} closer={searchOpener} />
            <ModalWrap on={barOpen} onClick={modalOpener}>
                <ModalBar />
            </ModalWrap>

            <Header onModal={modalOpener} onSearch={searchOpener} />
            <div className='lg:hidden'>
                <SearchInput>
                    <input type="text" className='flex-1 bg-transparent outline-none placeholder:text-sm' placeholder='도시나 상품을 검색해보세요' onFocus={searchOpener} />
                </SearchInput>
            </div>

            <DeskTopWrap>
                <HomeBanner />
            </DeskTopWrap>


            <DeskTopWrap className='lg:hidden'>
                <MoNav />
            </DeskTopWrap>

            <DeskTopWrap>
                <HomeSlider />
            </DeskTopWrap>

            <DeskTopWrap>
                <ScrollList id={1} />
                <ScrollList id={2} />
                <ScrollList id={3} />
                <ScrollList id={4} />
            </DeskTopWrap>

        </>
    )

}

export default HomeLayout