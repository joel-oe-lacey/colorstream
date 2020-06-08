import React from 'react';
import { shallow } from 'enzyme';
import ColorForm from './ColorForm';

describe('ColorForm', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ColorForm />);
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})