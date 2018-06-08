import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import Event from './Event';

const events = {
  name: ''
};
describe('Event', () => {
  it('component render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
    < Event event={events}/>
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
