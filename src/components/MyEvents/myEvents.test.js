import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import MyEvents from './MyEvents';

describe('myEvents', () => {
  it('component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
    < MyEvents />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have an `input` element', () => {
    const wrapper = shallow(<MyEvents />);
    expect(wrapper.containsMatchingElement(<input />)).toBe(true);
  });

  it('should have a `Create Event` button', () => {
    const wrapper = shallow(<MyEvents/>);
    expect(wrapper.containsMatchingElement(<button type="button" className="btn btn-primary"
    data-toggle="modal" data-target="#flipFlop">
    Create New
    </button>)).toBe(true);
  });
});
