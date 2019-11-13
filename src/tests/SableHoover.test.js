import React from 'react';
import ReactDOM from 'react-dom';
import SableHoover from '../components/AboutSlides/SableHoover';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SableHoover />, div);
  ReactDOM.unmountComponentAtNode(div);
});
