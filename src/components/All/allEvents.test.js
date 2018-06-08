import React from 'react';
import ReactDOM from 'react-dom';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { Router, BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Events from './Events';
import createHistory from 'history/createBrowserHistory';

const mine = [{
  category: '',
  location: '',
  name: '',
  date: '',
  id: '',
  description: ''
}];

const list = [];
describe('Events', () => {
  it('component renders without crashing', () => {
    const mock = new MockAdapter(axios);

    const history = createHistory();
    mock.onGet('http://localhost:8000/api/v2/events/all')
      .reply(
        200,
        [
          {
            category: 'ours',
            date: '2018-06-15',
            description: 'cxcxcxcxc',
            id: 41,
            location: 'uasin gishu',
            name: 'another event'
          },
          {
            category: 'learning',
            date: '2018-06-29',
            description: 'cp defence',
            id: 44,
            location: 'andela, amphitheatre ',
            name: 'cp defence'
          }
        ]
      );
    const wrapper = mount(<Router history={history}>< Events categories={list}/></Router>);
    wrapper.update();
    expect(wrapper).toBeDefined();
  });
});
