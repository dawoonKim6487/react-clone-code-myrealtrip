import React from 'react';
import { AiOutlineSearch, AiFillPushpin } from "react-icons/ai";

const SearchList = ({ children, data }) => {
    const { cate } = data;
    return (
        <li className='flex items-center gap-2 hover:bg-slate-100 p-1 cursor-pointer'>
            <div className='w-[30px] h-[30px] bg-slate-300 rounded flex justify-center items-center'>
                {
                    cate === 'area' ?
                        <AiFillPushpin size='18' color='#444' /> :
                        <AiOutlineSearch size='18' color='#444' />
                }
            </div>
            <span className='text-slate-500'>{children}</span>
        </li>
    )
}

export default SearchList;
