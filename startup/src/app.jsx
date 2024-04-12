import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { about } from './about/about';
import { addlocations } from './addlocations/addlocations';
import { LocationInfo } from './LocationInfo/LocationInfo';
import { locationlist } from './locationlist/locationlist';
import { login } from './login/login';
import { TheTaste } from './TheTaste/TheTaste';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className='body bg-dark text-light'> sub-elements here </div>
  </BrowserRouter>
);

export default function App() {
    return (
        <body>
            <header>
                <div class="inline"> <a href="index.html">Home</a> </div>
                <div class="inline"> <a href="locationlist.html">Locations</a> </div>
                <div class="inline"> <a href="addlocations.html">Add Location</a> </div>
                <div class="inline"> <a href="about.html">About</a></div>
            </header>
  
            <main>App components go here</main>
  
            <footer>
                <a href="https://github.com/KeleCant/Startup">GitHub</a>
            </footer>
        </body>
    );
  }