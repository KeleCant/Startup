//sets index.html page to change display if user is loged in or not
(async () => {
  const userName = localStorage.getItem('userName');
  if (userName) {
    document.querySelector('#playerName').textContent = userName;
    setDisplay('loginControls', 'none');
    setDisplay('playControls', 'block');
  } else {
    setDisplay('loginControls', 'block');
    setDisplay('playControls', 'none');
  }
})();

//sends endpoint to loginorCreate
async function loginUser() {
  const auth =loginOrCreate(`/api/auth/login`);
  localStorage.setItem('authToken', auth);
}

//sends endpoint to loginorCreate
async function createUser() {
  const auth = loginOrCreate(`/api/auth/create`);
  localStorage.setItem('authToken', auth);
}

//Important: This sends the json request to database
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
    window.location.href = 'LocationList.html';
    const authToken = getCookie('token');
    console.log('Authentication successful. Auth token:', authToken);
    return authToken;
  } else {
    const body = await response.json();
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
}

function Login() {
  window.location.href = 'locationlist.html';
}

function logout() {
  localStorage.removeItem('userName');
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
}

// Check to see if we have a user with the given userName.
async function getUser(userName) {
  const response = await fetch(`/api/user/${userName}`);
  if (response.status === 200) {
    return response.json();
  }
  return null;
}

// Check to see if we have a user with the given userName.
async function getAuth(userName) {
  const response = await fetch(`/api/auth/${userName}`);
  if (response.status === 200) {
    return response.json();
  }
  return null;
}

function setDisplay(controlId, display) {
  const playControlEl = document.querySelector(`#${controlId}`);
  if (playControlEl) {
    playControlEl.style.display = display;
  }
}
