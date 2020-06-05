import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import RoleSelectPage from './RoleSelectPage'

it('should render the start page without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <RoleSelectPage />
    </BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});