import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { About } from './about/about';
import { Addlocations } from './addlocations/addlocations';
import { LocationInfo } from './LocationInfo/LocationInfo';
import { Locationlist } from './locationlist/locationlist';
import { Login } from './login/login';
import { TheTaste } from './TheTaste/TheTaste';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  //const [authState, setAuthState] = React.useState(currentAuthState);

    return (
      <BrowserRouter>
        <body>
            <header>
                <div class="inline"> <NavLink className='nav-link' to=''> Home </NavLink> </div>
                <div class="inline"> <NavLink className='nav-link' to='locationlist'> Locations </NavLink> </div>
                <div class="inline"> <NavLink className='nav-link' to='addlocations'> Add Location </NavLink> </div>
                <div class="inline"> <NavLink className='nav-link' to='about'> About </NavLink> </div>
            </header>
  
            <Routes>
              {/* <Route path='/' element={<Login userName={userName} authState={authState} onAuthChange={(userName, authState) => {setAuthState(authState); setUserName(userName);}}/>} exact/> */}
              {/* <Route
                path='/'
                element={
                  <Login
                    userName={userName}
                    authState={authState}
                    onAuthChange={(userName, authState) => {
                    setAuthState(authState);
                    setUserName(userName);
                    }}
                  />
                }
              exact
              /> */}
              <Route path='/' element={<Login />} />
              <Route path='/locationlist' element={<Locationlist />} />
              <Route path='/addlocations' element={<Addlocations />} />
              <Route path='/about' element={<About />} />
              <Route path='/LocationInfo' element={<LocationInfo />} />
              <Route path='/TheTaste' element={<TheTaste />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
  
            <footer>
                <a href="https://github.com/KeleCant/Startup">GitHub</a>
            </footer>
        </body>
      </BrowserRouter>
    );
  }

  function NotFound() {
    return <main className='container-fluid bg-secondary text-center'> 404: Return to sender. Address unknown. </main>;
  }