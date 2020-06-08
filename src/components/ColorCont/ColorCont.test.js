import React from 'react';
import { shallow } from 'enzyme';
import ColorCont from './ColorCont';

describe('ColorCont', () => {
    let wrapper;
    const mockColors = ['B8C480', 'D4E79E', '922D50', '501537']

    beforeEach(() => {
        wrapper = shallow(<ColorCont colors={mockColors}/>);
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})