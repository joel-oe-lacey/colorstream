import React from 'react';
import "./ColorCont.scss";
import ColorBox from '../ColorBox/ColorBox';

const ColorCont = ({colors}) => {
    const colorDisplay = colors.map(color => {
        return <ColorBox color={color} />
    })

    return (
        <section className="ColorDisp">
            {colorDisplay}
        </section>
    )
}

export default ColorCont;