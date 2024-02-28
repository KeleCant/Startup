function login() {
    const username = document.querySelector("#name");
    localStorage.setItem("userName", username.value);
    window.location.href = "locationlist.html";
  }