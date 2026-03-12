const loginForm = document.getElementById("loginForm");
const orderLink = document.getElementById("order-link");
const logoutBtn = document.getElementById("logoutBtn");

// login form
if(loginForm){
  loginForm.addEventListener("submit", function(event){
    event.preventDefault();

    const password = document.getElementById("password").value;

    if(password === "bakery123"){
      sessionStorage.setItem("loggedIn", "true");
      window.location.href = "../pages/order-page.html";
    } else {
      alert("Incorrect password");
    }
  });
}

// order link protection
if(orderLink){
  orderLink.addEventListener("click", function(event){
    if(sessionStorage.getItem("loggedIn") !== "true"){
      event.preventDefault();
      window.location.href = "order-page.html";
    }
  });
}

// logout button
if(logoutBtn){
  logoutBtn.addEventListener("click", function(){
    sessionStorage.removeItem("loggedIn");
    window.location.href = "../pages/login-page.html";
  });

}

