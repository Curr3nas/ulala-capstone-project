import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Tank from './Tank'

it('should render the tank page without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <Tank />
    </BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});