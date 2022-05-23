import React from 'react';
import { useInView } from "react-intersection-observer";

const ScrollList = () => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });

    React.useEffect(() => {
        console.log('보인다!')
    }, [inView])
    return (
        <div ref={ref} className="h-[500px]">
            <h3>{!inView ? '안보여' : '보여'}</h3>
        </div>
    )
}

export default ScrollList;
