import React from 'react';
import { shallow } from 'enzyme';
import ColorCont from './ColorCont';

describe('ColorCont', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ColorCont />);
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})