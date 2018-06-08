import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import EditEventModal from './EditorModal.jsx';
import VisitorList from './VisitorList.jsx';

const forms = {
  id: '4',
};
const users = [];


describe('Event', () => {
  it('loads the create event page', () => {
    const wrapper = shallow(<EditEventModal event={forms}/>);
    expect(wrapper).toBeDefined();
  });
});

describe('Visitor', () => {
  it('loads the visitor component', () => {
    const wrapper = shallow(<VisitorList event={forms} users={users}/>);
    expect(wrapper).toBeDefined();
  });
});
