import React from 'react';
import { shallow } from 'enzyme';
import ColorBox from './ColorBox';

describe('ColorBox', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ColorBox />);
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})