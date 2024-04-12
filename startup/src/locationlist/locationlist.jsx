import React from 'react';
import { NavLink } from 'react-router-dom';

export function Locationlist() {
  return (
    <main>
      <h1> What To Do: Provo </h1>
      <h1> Places to visit </h1>
      <div className="locations">
        <div className="new location"> <NavLink className='nav-link' to='/locationinfo'> The Taste </NavLink> </div>
        <div className="new location"> <NavLink className='nav-link' to='/locationinfo'> The Vibe </NavLink> </div>
        <div className="new location"> <NavLink className='nav-link' to='/locationinfo'> Dutch Bros </NavLink> </div>
      </div>
    </main>
  );
}

export default Locationlist;