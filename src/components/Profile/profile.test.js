import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import Profile from './Profile';

describe('myEvents', () => {
  it('component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
    < Profile />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have a `Reset Password` button', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.containsMatchingElement(<input className="form-control btn btn-primary"
    value="Change Password"/>)).toBe(true);
  });

  it('should have an `input` element', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.containsMatchingElement(<input />)).toBe(true);
  });
});
