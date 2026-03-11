  const orderLink = document.getElementById('order-link');

if(orderLink){
  orderLink.addEventListener('click', function(event){
    event.preventDefault(); 
    
    const loggedIn = false; 
    
    if(loggedIn) {
      window.location.href = "/pages/order-page.html";
    }
    else if (!loggedIn) {
      window.location.href = "/pages/login-page.html";
    }
  });
}


