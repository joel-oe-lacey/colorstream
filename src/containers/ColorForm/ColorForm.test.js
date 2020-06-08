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

    it('should update the state in state when handle change is called', () => {
        const mockEventColor = {
            target: {
                name: 'color',
                value: 'a3b1c699'
            }
        }
        const expectedColor = 'a3b1c699';

        wrapper.instance().handleChange(mockEventColor);

        expect(wrapper.state('color')).toEqual(expectedColor);
    })
})