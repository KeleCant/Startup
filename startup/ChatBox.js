// Adjust the webSocket protocol to what is being used for HTTP
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
const userName = localStorage.getItem('userName'); 
const authToken = localStorage.getItem('authToken');

// This will display if the websocket is working or not
socket.onopen = (event) => {
    appendMsg('system', 'websocket', 'connected');
    //check to see if user is loged in
    if (userName == null) {
        document.querySelector('#chat-controls').disabled = true;
    } else {
        document.querySelector('#chat-controls').disabled = false;
    }
};

// Display messages we receive from our friends
socket.onmessage = async (event) => {
  const text = await event.data.text();
  const chat = JSON.parse(text);
  appendMsg('friend', chat.name, chat.msg);
};

// If the webSocket is closed then disable the interface
socket.onclose = (event) => {
  appendMsg('system', 'websocket', 'disconnected');
  document.querySelector('#chat-controls').disabled = true;
};

// Send a message over the webSocket
function sendMessage() {
    //check to see if user is loged in
    if (userName == null) {
        document.querySelector('#chat-controls').disabled = true;
    } else {
        document.querySelector('#chat-controls').disabled = false;
    }
  const msgEl = document.querySelector('#new-msg');
  const msg = msgEl.value;
  if (!!msg) {
    appendMsg(userName, userName, msg);
    socket.send(`{"name":"${userName}", "msg":"${msg}"}`);
    msgEl.value = '';
  }
}


// Create one long list of messages
function appendMsg(cls, from, msg) {
  const chatText = document.querySelector('#chat-text');
  const chatEl = document.createElement('div');
  chatEl.innerHTML = `<span class="${cls}">${from}</span>: ${msg}</div>`;
  chatText.prepend(chatEl);
}


// Send message on enter keystroke
const input = document.querySelector('#new-msg');
input.addEventListener('keydown', (e) => {
  //check to see if user is loged in
  if (userName == null) {
    document.querySelector('#chat-controls').disabled = true;
} else {
    document.querySelector('#chat-controls').disabled = false;
}
    if (e.key === 'Enter') {
    sendMessage();
  }
});