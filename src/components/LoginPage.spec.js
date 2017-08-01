import React from 'react';
import {shallow} from 'enzyme';
import LoginPage from './LoginPage';

describe('<LoginPage />', () => {
  it('should have an Input for \'User Name\'', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.find('input#userName')).to.have.length(1);
  });

  it('should have an Input for \'Password\'', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.find('input#password')).to.have.length(1);
  });

  it('should have a button to submit ', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.find('input#submit')).to.have.length(1);
  });
});
