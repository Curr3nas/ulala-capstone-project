import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Dps from './Dps'

it('should render the dps page without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <Dps />
    </BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});