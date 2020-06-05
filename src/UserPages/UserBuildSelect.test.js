import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import UserBuildSelect from './UserBuildSelect'

it('should render the start page without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <UserBuildSelect />
    </BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});