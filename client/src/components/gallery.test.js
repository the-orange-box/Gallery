import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './gallery.jsx';

describe('Gallery Component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Gallery debug />);
  
    expect(component).toMatchSnapshot();
  });
});