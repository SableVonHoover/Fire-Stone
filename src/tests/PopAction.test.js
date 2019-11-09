import React from 'react';
import ReactDOM from 'react-dom';
import PopAction from '../components/PopAction';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PopAction />, div);
  ReactDOM.unmountComponentAtNode(div);
});
