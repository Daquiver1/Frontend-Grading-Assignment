import React from 'react'
import ReactDOM from 'react-dom';


import './index.css';
import App from './App'
import Footer from './footer'


import { BrowserRouter } from 'react-router-dom';



   



ReactDOM.render(
<BrowserRouter><App/>
<Footer/></BrowserRouter>
,document.getElementById('root')
)


