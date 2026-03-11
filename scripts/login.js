  const orderLink = document.getElementById('order-link');

if(orderLink){
  orderLink.addEventListener('click', function(event){
    event.preventDefault(); 
    
    const loggedIn = false; 
    
    const prefix = window.location.pathname.includes('/pages/') ? '' : 'pages/';

    window.location.href = prefix + (loggedIn ? 'order-page.html' : 'login-page.html');
  });
}





