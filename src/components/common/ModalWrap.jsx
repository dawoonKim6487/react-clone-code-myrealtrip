import React from 'react';
import tw from 'tailwind-styled-components';

const ModalWrapStyle = tw.div`
    bg-black
    bg-opacity-50
    absolute
    top-0
    w-full
    h-screen
    z-10
`

const ModalWrap = ({ children, on }) => {
    return (
        <>
            {on && <ModalWrapStyle>{children}</ModalWrapStyle>}
        </>
    )

}

ModalWrap.defaultProps = {
    on: false
}

export default ModalWrap;