import React from 'react';
import ReactDOM from 'react-dom';
import MediaCard from '../components/fighterCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MediaCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
