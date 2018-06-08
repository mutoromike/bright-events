import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import Event from './Event';

const events = {
  name: ''
};
describe('Event', () => {
  it('loads the create event page', () => {
    const wrapper = shallow(<Event event={events}/>);
    expect(wrapper).toBeDefined();
  });
});
