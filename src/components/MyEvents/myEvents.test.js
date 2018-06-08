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
});
