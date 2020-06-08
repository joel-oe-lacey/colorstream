import React from 'react';
import "./ColorBox.scss";

const ColorBox = ({color}) => {
    return (
        <section className='color-cont'>
            <div style={{ backgroundColor: `${color}` }}
                className='color-cont-inner'
            ></div>
        </section>
    )
}

export default ColorBox;