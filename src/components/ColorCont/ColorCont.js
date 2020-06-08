import React from 'react';
import "./ColorCont.scss";
import ColorBox from '../ColorBox/ColorBox';

const ColorCont = ({colors}) => {
    const colorDisplay = colors.map((color, index) => {
        return <ColorBox key={index} color={color} />
    })

    return (
        <section className="ColorDisp">
            {colorDisplay}
        </section>
    )
}

export default ColorCont;