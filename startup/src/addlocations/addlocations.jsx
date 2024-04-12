import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Addlocations(props) {
  const navigate = useNavigate();
  return (
    <main>
      <h1>What To Do: Provo</h1>
      <h2>Welcome, <span id="playerName"> </span></h2>
      <h3>Add Location</h3>
      <form id="locationForm">
        <div>
          <label htmlFor="locationname">Name of Place:</label>
          <input type="text" id="locationname" placeholder="Location Name Here" />
        </div>
        <div>
          <label htmlFor="adress">Address:</label>
          <input type="text" id="adress" placeholder="Location Address Here" />
        </div>
        <div>
          <label htmlFor="Rewiew">How was it?</label>
          <input type="text" id="Rewiew" placeholder="Write a Review" />
        </div>
        <div>
          <label htmlFor="again">Would you go again?</label>
          <input type="checkbox" id="again" name="Would you go again" value="Yes" />
          <label htmlFor="Yes">Yes</label>
        </div>
        <button type="button" id="addLocationButton" className="btn btn-primary" onClick={() => navigate('/locationlist')}>Add</button>
      </form>
    </main>
  );
}

export default Addlocations;