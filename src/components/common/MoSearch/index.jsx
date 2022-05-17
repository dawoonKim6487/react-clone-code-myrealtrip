import React from 'react';
import { IconBtn } from '@/styles'
import { AiOutlineClose } from "react-icons/ai";
import { HeaderInput } from '@/components/template/Home';
import SearchList from "../SearchList"

const MoSearchModal = ({ on, closer }) => {
    const [list, setList] = React.useState([]);
    const getList = () => {
        setList([
            { id: 0, cate: "area", name: 'Data 123 data data lorem' },
            { id: 1, cate: "recommend", name: 'dummy text text loream is simple' },
            { id: 2, cate: "recommend", name: 'dummy write test data is good' },
        ])
    };

    React.useEffect(() => {
        setList([])
    }, [on]);

    return (
        <>
            {on &&
                <div className='w-full h-full fixed bg-white'>
                    <IconBtn onClick={closer}>
                        <AiOutlineClose size='24' color='#444444' />
                    </IconBtn>
                    <HeaderInput>
                        <input
                            type="text"
                            className='flex-1 bg-transparent outline-none placeholder:text-sm'
                            placeholder='도시나 상품을 검색해보세요'
                            onChange={getList}
                            autoFocus />
                    </HeaderInput>
                    <ul className='px-3 py-2 flex flex-col gap-2'>
                        {list.map((ele) => <SearchList key={ele.id} data={ele}>{ele.name}</SearchList>)}
                    </ul>
                </div>
            }
        </>
    )
}


export default MoSearchModal;