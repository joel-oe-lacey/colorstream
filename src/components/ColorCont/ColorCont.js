import React from 'react';
import "./ColorCont.scss";
import ColorBox from '../ColorBox/ColorBox';

const ColorCont = () => {
    return (
        <section className="ColorDisp">
            <ColorBox />
            <ColorBox />
            <ColorBox />
            <ColorBox />
        </section>
    )
}

export default ColorCont;