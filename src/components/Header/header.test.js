import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('component render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
    < Header />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have a search field', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.containsMatchingElement(<button className="btn btn-primary" type="submit">
    <i className="glyphicon glyphicon-search"></i></button>)).toBe(true);
  });

  it('should have a page title', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.containsMatchingElement(<a className="navbar-brand">Bright Events</a>)).toBe(true);
  });
});
