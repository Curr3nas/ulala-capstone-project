import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Healer from './Healer'

it('should render the start page without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <Healer />
    </BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});