import React from 'react';
import ReactDOM from 'react-dom';
import AdamNewman from '../components/AdamNewman';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdamNewman />, div);
  ReactDOM.unmountComponentAtNode(div);
});
