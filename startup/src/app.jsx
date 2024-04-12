import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
      <div className='body bg-dark text-light'>
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
      </div>
    );
  }