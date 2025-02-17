import React, { useState } from 'react';

export default function CustomCursor({ children }) {
    const [textLength, setTextLength] = useState({
        top: 0,
        left: 0
    });

    const mouseHandle = (e) => {
        let x = e.pageX;
        let y = e.pageY;
        setTextLength({
            top: y - 100 + "px",
            left: x - 100 + "px"
        });
    };

    return (
        <div onMouseMove={mouseHandle}>
            <div
                id="custom_cursor"
                style={{
                top: textLength.top,
                left: textLength.left
                }}
            >
            </div>
            {children}
        </div>
    );
}
