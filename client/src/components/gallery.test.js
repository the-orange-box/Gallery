import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Gallery from './gallery.jsx';

describe('Gallery Component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Gallery handleClick={()=>{}} imagelist={[]} debug/>);
    expect(component).toMatchSnapshot();
  });

  it('should render without throwing an error', function() {
    expect(shallow(<Gallery handleClick={()=>{}} imagelist={[]} />).contains(<div className="gallerycontainer"></div>)).toBe(true);
  });

  it('should be selectable by class "gallerycontainer"', function() {
    expect(shallow(<Gallery handleClick={()=>{}} imagelist={[]} />).is('.gallerycontainer')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Gallery handleClick={()=>{}} imagelist={[]} />).find('.gallerycontainer').length).toBe(1);
  });

  it('should receive props', function() {
    const component = mount(<Gallery handleClick={()=>{}} imagelist={[]}/>);
    component.setProps({ handleClick: function(){}, imagelist:['hello'] });
    console.log(component.props());
    expect(component.props().imagelist).toEqual(['hello']);
    expect('imagelist' in component.props()).toEqual(true);
  });

  it('should set state', function() {
    const component = shallow(<Gallery handleClick={()=>{}} imagelist={[]}/>);
    component.setState({ currentImage: 5 });
    expect(component.state('currentImage')).toEqual(5);
    expect('currentImage' in component.state()).toEqual(true);
  });

  it('should simulate a click and call handleClick', function() {
    const component = mount(<Gallery handleClick={()=>{console.log('clicked');}} imagelist={[{image: '/'}]}/>);
    component.find('.galleryitem').simulate('click');
    // expect(component.contains(<div key={0} onClick={()=>{console.log('clicked');}} className="galleryitem"><img className="galleryImage" src='/'></img></div>)).toEqual(true);
  });
  
  // it('should render to static HTML', function() {
  //   expect(render(<Gallery />).text()).toEqual('Bar');
  // });
});