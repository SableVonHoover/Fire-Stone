import React from 'react';
import ReactDOM from 'react-dom';
import SignOut from '../components/SignOut';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignOut />, div);
  ReactDOM.unmountComponentAtNode(div);
});
