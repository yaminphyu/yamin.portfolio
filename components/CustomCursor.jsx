import React, { useState } from 'react';

export default function CustomCursor({ children }) {
    const [cursorPosition, setCursorPosition] = useState({
        top: 0,
        left: 0
    });

    const mouseHandle = (e) => {
        let x = e.pageX;
        let y = e.pageY;
        setCursorPosition({
            top: y - 100 + "px",
            left: x - 100 + "px"
        });
    };

    return (
        <>
            <div onMouseMove={mouseHandle} className='hidden lg:block w-full h-full'>
                <div
                    id="custom_cursor"
                    style={{
                        top: cursorPosition.top,
                        left: cursorPosition.left
                    }}
                >
                </div>
                {children}
            </div>
            <div className='block lg:hidden w-full h-full'>
                {children}
            </div>
        </>
    );
}
