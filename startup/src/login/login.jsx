import React from 'react';

export function Login() {
  return (
    <main>
      <div>
        <h1> What To Do: Provo </h1>
          <div class="input-group mb-3">
            <span class="input-group-text"> Username </span>
            <input class="form-control" type="text" id="userName" placeholder="Insert Username" />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text"> Password </span>
            <input class="form-control" type="password" id="userPassword" placeholder="Insert Password" />
          </div>

          <button type="button" class="btn btn-primary" onclick="loginUser()"> Login </button>
          <button type="button" class="btn btn-primary" onclick="createUser()"> Create </button>
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
