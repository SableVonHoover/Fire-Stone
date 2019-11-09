import React from 'react';
import ReactDOM from 'react-dom';
import AboutApp from '../components/Instructions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AboutApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
