const loginForm = document.getElementById("loginForm");
const alertBox = document.getElementById("alertBox");

loginForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const showAlert = (message) => {
    if (!alertBox) return;
    alertBox.innerText = message;
    alertBox.classList.add("show");
    alertBox.hidden = false;

    setTimeout(() => {
      alertBox.classList.remove("show");
      alertBox.hidden = true;
    }, 3000);
  };

  try {
    const res = await fetch(
      "https://herisusanta.my.id/javalogin/api/auth.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `action=login&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
      },
    );

    if (!res.ok) {
      showAlert("Terjadi masalah jaringan. Silakan coba lagi nanti.");
      return;
    }

    const data = await res.json();

    if (data.status === "success") {
      localStorage.setItem("username", data.username);
      window.location.href = "index.html";
      return;
    }

    showAlert("Username atau Password salah, silahkan coba lagi.");
  } catch (error) {
    showAlert(
      "Tidak dapat terhubung ke server. Periksa koneksi internet Anda.",
    );
    console.error(error);
  }
});
