import React from 'react';
import { shallow } from 'enzyme';
import App from './ColorBox';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})