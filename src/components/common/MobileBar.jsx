import React from 'react'
import tw from 'tailwind-styled-components';

const MoBarStyle = tw.div`
    h-full
    bg-white
    absolute
    ${props => props.position === 'r' ? 'right-0' : 'left-0'}
`


const ModalBar = ({ children, position }) => {
    return (
        <MoBarStyle position={position}>
            {children}
        </MoBarStyle>
    )
}

ModalBar.defaultProps = {
    position: 'l',
    width: '50'
}

export default ModalBar;