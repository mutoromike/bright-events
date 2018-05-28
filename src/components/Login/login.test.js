import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  it('login renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
    < Login />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have `bootstrap-icons`', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.contains(<span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i>
  </span>)).toBe(true);
  });

  it('should have an `input` element', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.containsMatchingElement(<input />)).toBe(true);
  });

  it('should have a `Log In` button', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.containsMatchingElement(<input className="form-control btn btn-primary" value="Log In"/>)).toBe(true);
  });
});
