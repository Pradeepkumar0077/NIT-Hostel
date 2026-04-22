// Leave Form
document.getElementById("leaveForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Leave submitted successfully!");
});

// Login Form
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    document.getElementById("loginMsg").innerText = "Login Successful";
  } else {
    document.getElementById("loginMsg").innerText = "Invalid Credentials";
  }
});