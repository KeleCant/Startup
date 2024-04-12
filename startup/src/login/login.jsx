import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Login() {
  // Function to handle login
  const loginUser = async () => {
    //await loginOrCreate(`/api/auth/login`);
    navigate('/locationlist');
  };

  // Function to handle user creation
  const createUser = async () => {
    //await loginOrCreate(`/api/auth/create`);
  };

  //Important: This sends the json request to the database
  async function loginOrCreate(endpoint) {
    const userName = document.querySelector('#userName')?.value;
    const password = document.querySelector('#userPassword')?.value;
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ userName: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (response.ok) {
      localStorage.setItem('userName', userName);
      const authToken = getCookie('token');
      console.log('Authentication successful. Auth token:', authToken);
      // Assuming navigate is a function to redirect the user, you need to define it
      navigate('/locationlist');
      return authToken;
    } else {
      const body = await response.json();
      // Display error message in modal
      const modalEl = document.querySelector('#msgModal');
      modalEl.querySelector('.modal-body').textContent = `Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
    }
  }

  return (
    <main>
      <div>
        <h1> What To Do: Provo </h1>
        <div className="input-group mb-3">
          <span className="input-group-text"> Username </span>
          <input className="form-control" type="text" id="userName" placeholder="Insert Username" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text"> Password </span>
          <input className="form-control" type="password" id="userPassword" placeholder="Insert Password" />
        </div>

        <button type="button" className="btn btn-primary" onClick={loginUser}> Login </button>
        <button type="button" className="btn btn-primary" onClick={createUser}> Create </button>
      </div>
      <div className="modal fade" id="msgModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-dark">
            <div className="modal-body">error message here</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}





export function Loggedin() {
  return (
    <main>
      <div>
        <h1> What To Do: Provo </h1>
        <div id="playControls" style="display: none">
          <h2>Welcome, <dev id="playerName"></dev></h2>
          <button type="button" class="btn btn-primary" onclick="Login()"> Browse </button>
          <button type="button" class="btn btn-secondary" onclick="logout()"> Logout </button>
        </div>

        <div class="modal fade" id="msgModal" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content text-dark">
              <div class="modal-body">error message here</div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
