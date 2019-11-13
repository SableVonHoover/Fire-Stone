import React from 'react';
import ReactDOM from 'react-dom';
import NicholasShipley from '../components/AboutSlides/NicholasShipley';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NicholasShipley />, div);
  ReactDOM.unmountComponentAtNode(div);
});
