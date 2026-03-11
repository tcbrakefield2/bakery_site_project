  const orderLink = document.getElementById('order-link');

  orderLink.addEventListener('click', function(event){
    event.preventDefault(); 
    
    const loggedIn = false; 
    if(loggedIn) {
      window.location.href = '/pages/order-page.html';
    }
    else if (!loggedIn) {
      window.location.href = '/pages/login-page.html';
    }
    

  });
