  const orderLink = document.getElementById('order-link');

  orderLink.addEventListener('click', function(event){
    event.preventDefault(); // prevent default navigation
    //check login is true or not. if login, straigt to order page
    const loggedIn = false; 
    if(loggedIn) {
      window.location.href = '../pages/order-page.html'; // go to login page
    }
    else if (!loggedIn) {
      window.location.href = '../pages/login-page.html'; // go to login page
    }
    
  });