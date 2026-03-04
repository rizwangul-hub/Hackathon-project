function handleSignup(e) {
  e.preventDefault();

  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-pass").value;

  if (name && email && password) {
    const user = { name: name, email: email, password: password };
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup Successful! Please Login.");
    window.location.href = "login.html"; 
  }
}

function handleLogin(e) {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-pass").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const storedUser = users.find(
    (user) => user.email === email && user.password === password,
  );

if (storedUser) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", storedUser.name);

    alert("Login Successful!");
    window.location.href = "home.html"; 
  } else {
    alert("Invalid Email or Password");
  }
}
