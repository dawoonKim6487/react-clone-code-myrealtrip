import React from 'react';
import tw from 'tailwind-styled-components';

const NavList = tw.li`
    w-1/5
    text-center
    flex
    flex-col
    items-center
    mb-3
`
const NavIcon = tw.div`
    w-[50px]
    h-[50px]
    bg-slate-100
    rounded
`


const MoNav = () => {
    const nav = [
        { id: 0, title: '타이틀1', icon: '1' },
        { id: 1, title: '타이틀2', icon: '1' },
        { id: 2, title: '타이틀3', icon: '1' },
        { id: 3, title: '타이틀4', icon: '1' },
        { id: 4, title: '타이틀5', icon: '1' },
        { id: 5, title: '타이틀6', icon: '1' },
        { id: 6, title: '타이틀7', icon: '1' },
        { id: 7, title: '타이틀8', icon: '1' },
        { id: 8, title: '타이틀9', icon: '1' },
        { id: 9, title: '타이틀10', icon: '1' },
        { id: 10, title: '타이틀11', icon: '1' },
        { id: 11, title: '타이틀12', icon: '1' },
        { id: 12, title: '타이틀13', icon: '1' },
        { id: 13, title: '타이틀14', icon: '1' },
        { id: 14, title: '타이틀15', icon: '1' },
    ]
    return (
        <ul className='flex flex-wrap justify-between'>
            {
                nav.map((ele) => {
                    return (
                        <NavList key={ele.id}>
                            <NavIcon></NavIcon>
                            <span className='text-sm'>{ele.title}</span>
                        </NavList>
                    )
                })
            }

        </ul>
    )
}

export default MoNav;
