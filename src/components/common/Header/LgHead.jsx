import React from 'react';
import { DeskTopWrap } from '@/styles'
import tw from 'tailwind-styled-components';
import { HeaderInput } from '@/components/template/Home';
import SearchList from "../SearchList"

const NavStyle = tw.li`
    pb-2
    border-b-4
    box-border
    border-transparent
    hover:border-sky-400
    cursor-pointer
`
const Btn = tw.div`
    text-[#444]
    text-sm
`
const FlexBetweenCenter = tw.div`
    flex justify-between items-center
`

const LgHead = () => {
    const [list, setList] = React.useState([]);
    const [Input, setInput] = React.useState("");
    const InputData = (e) => {
        setInput(e.target.value)
    }

    React.useEffect(() => {
        if (Input.length > 0) {
            setList([
                { id: 0, cate: "area", name: 'Data 123 data data lorem' },
                { id: 1, cate: "recommend", name: 'dummy text text loream is simple' },
                { id: 2, cate: "recommend", name: 'dummy write test data is good' },
            ])
        }
        else {
            setList([]);
        }
    }, [Input]);

    return (
        <>
            <DeskTopWrap>
                <FlexBetweenCenter>
                    <div className='flex items-center flex-1'>
                        <h1 className='text-2xl'>MyTripLogo</h1>
                        <div className='flex-1 relative'>
                            <HeaderInput>
                                <input type="text"
                                    className='flex-1 bg-transparent outline-none placeholder:text-sm'
                                    placeholder='도시나 상품을 검색해보세요'
                                    onChange={InputData}
                                />
                            </HeaderInput>
                            <div className='absolute w-full px-3'>
                                {list.length > 0 && <ul className='bg-white p-1 py-2 rounded drop-shadow-lg border flex flex-col gap-2'>
                                    {list.map((ele) => <SearchList key={ele.id} data={ele}>{ele.name}</SearchList>)}
                                </ul>}
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end flex-1 h-full gap-5 items-center'>
                        <Btn>파트너 등록하기</Btn>
                        <Btn>로그인</Btn>
                        <Btn className='py-2 px-5 border border-sky-300'>회원가입</Btn>
                    </div>
                </FlexBetweenCenter>
            </DeskTopWrap>
            <div className="border-b pt-4">
                <DeskTopWrap>
                    <FlexBetweenCenter>
                        <ul className='flex w-full gap-8'>
                            <NavStyle>홈</NavStyle>
                            <NavStyle>항공권</NavStyle>
                            <NavStyle>투어&middot;티켓</NavStyle>
                            <NavStyle>국내숙소</NavStyle>
                            <NavStyle>호캉스</NavStyle>
                            <NavStyle>렌터카</NavStyle>
                            <NavStyle>패키지</NavStyle>
                            <NavStyle>한인민박</NavStyle>
                            <NavStyle>해외호텔</NavStyle>
                            <NavStyle>할인혜택</NavStyle>
                            <NavStyle>아이와함께</NavStyle>
                        </ul>
                    </FlexBetweenCenter>
                </DeskTopWrap>
            </div>
        </>
    )
}

export default LgHead;