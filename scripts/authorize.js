const loginForm = document.getElementById("loginForm");
const orderLink = document.getElementById("order-link");
const logoutBtn = document.getElementById("logoutBtn");

// login form
if(loginForm){
  loginForm.addEventListener("submit", function(event){
    event.preventDefault();

    const password = document.getElementById("password").value;

    if(password === "lasagna"){
      localStorage.setItem("loggedIn", "true");
      window.location.href = "../pages/order-page.html";
    } else {
      alert("Incorrect password");
    }
  });
}

// order link protection
if(orderLink){
  orderLink.addEventListener("click", function(event){
    if(localStorage.getItem("loggedIn") !== "true"){
      event.preventDefault();
      window.location.href = "../pages/login-page.html";
    }
  });
}

// logout button
if(logoutBtn){
  logoutBtn.addEventListener("click", function(){
    localStorage.removeItem("loggedIn");
    window.location.href = "../pages/login-page.html";
  });
}