document.addEventListener("DOMContentLoaded", function () {
  function goLogin() {
    window.location.href = "login.html";
  }

  function logout() {
    localStorage.removeItem("username");
    location.reload();
  }

  const user = localStorage.getItem("username");

  if (user) {
    document.getElementById("userInfo").innerText = "Halo, " + user;

    document.getElementById("authArea").innerHTML = `
            <button onclick="logout()" style="
                background: #ff4f81;
                color: white;
                padding: 8px 20px;
                border-radius: 50px;
              ">Logout</button>
        `;
  }

  window.goLogin = goLogin;
  window.logout = logout;
});
