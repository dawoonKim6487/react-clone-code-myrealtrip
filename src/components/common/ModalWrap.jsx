import React from 'react';
import tw from 'tailwind-styled-components';

const ModalWrapStyle = tw.div`
    bg-black
    bg-opacity-50
    fixed
    top-0
    w-full
    h-screen
    z-10
    flex
`

const ModalWrap = ({ children, on, onClick }) => {
    const closeModal = (e) => {
        if (e.target !== e.currentTarget) return
        e.preventDefault();
        onClick()
    }

    return (
        <>
            {on && <ModalWrapStyle onClick={closeModal}>{children}</ModalWrapStyle>}
        </>
    )

}

ModalWrap.defaultProps = {
    on: false
}

export default ModalWrap;