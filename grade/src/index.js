import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';




ReactDOM.render(
  <BrowserRouter><Header/></BrowserRouter>,document.getElementById('root')
)
