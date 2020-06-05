import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import StartPage from './StartPage'

it('should render the start page without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <StartPage />
    </BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});