import React from 'react';
import tw from 'tailwind-styled-components';
import { AiOutlineSearch } from "react-icons/ai";

const HeaderInputWrap = tw.div`
    my-2
    px-3
`

const HeaderInput = ({ children }) => {
    return (
        <HeaderInputWrap>
            <div className="bg-slate-200 py-3 px-4 rounded flex gap-2 items-center">
                <AiOutlineSearch size='24' color='#444444' />
                {children}
                {/* <input type="text" className='flex-1 bg-transparent outline-none placeholder:text-sm' placeholder='도시나 상품을 검색해보세요' /> */}
            </div>
        </HeaderInputWrap>
    )

}

export default HeaderInput