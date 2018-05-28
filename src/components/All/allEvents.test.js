// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import { shallow } from 'enzyme';
// import Events from './Events';

// describe('Events', () => {
//   it('all events render without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<BrowserRouter>
//     < Events />
//     </BrowserRouter>, div);
//     ReactDOM.unmountComponentAtNode(div);
//   });

//   it('should have `bootstrap-icons`', () => {
//     const wrapper = shallow(<Login />);
//     expect(wrapper.contains(<span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i>
//   </span>)).toBe(true);
//   });

//   it('should have an `input` element', () => {
//     const wrapper = shallow(<Login />);
//     expect(wrapper.containsMatchingElement(<input />)).toBe(true);
//   });

//   it('should have a `Log In` button', () => {
//     const wrapper = shallow(<Login />);
//     expect(wrapper.containsMatchingElement(<input type="submit" className="form-control btn btn-primary" value="Log In"/>)).toBe(true);
//   });
// });
