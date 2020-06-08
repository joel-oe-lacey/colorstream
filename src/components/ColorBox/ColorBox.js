import React from 'react';
import "./ColorBox.scss";
const tinycolor = require("tinycolor2");

const ColorBox = ({color}) => {
    const greyscale = tinycolor(color).greyscale().toString();
    
    return (
        <section className='color-cont'>
            <div style={{ backgroundColor: `${color}` }}
                className='color-cont-inner'
            >
            <h3 style={{ color: `${greyscale}` }}
              >{`${color}`}</h3>  
            </div>
        </section>
    )
}

export default ColorBox;