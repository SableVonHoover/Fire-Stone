import React from 'react';
import ReactDOM from 'react-dom';
import PeterTan from '../components/AboutSlides/PeterTan';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PeterTan />, div);
  ReactDOM.unmountComponentAtNode(div);
});
