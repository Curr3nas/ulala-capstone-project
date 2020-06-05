import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ClassPage from './ClassPage'

it.skip('should render the class page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ClassPage />
    </BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});