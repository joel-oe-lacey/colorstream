import React from 'react';
import "./ColorBox.scss";

const ColorBox = ({ props: {hex}}) => {
    return (
        <section className='color-cont'>
            <div style={{ backgroundColor: "blue" }}
                className='color-cont-inner'
            ></div>
        </section>
    )
}

export default ColorBox;