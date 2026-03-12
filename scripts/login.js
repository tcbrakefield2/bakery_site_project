  const orderLink = document.getElementById('order-link');



//if login = false, then create a button. 
document.addEventListener('DOMContentLoaded', ()=>{



  console.log('dom loaded? ')
  //check login status.. 
  //if getItem ... true... 

  let logoutBtn = document.createElement("button"); 
  
  logoutBtn.textContent = 'logout'; 
  // logoutBtn.classList('btn btn-secondary'); 
  // add a click event...remove session = false. 
  
  orderLink.parentNode.insertBefore(logoutBtn, orderLink.nextSibling);

});  


if(orderLink){
  orderLink.addEventListener('click', function(event){
    event.preventDefault(); 
    
    // const loggedIn = false; 
    const loggedIn = sessionStorage.getItem('loggedIn');
  

    if(loggedIn) {
      window.location.href = "../pages/order-page.html";
    }
      else if (!loggedIn) {
      window.location.href = "../pages/login-page.html";
      }
  });
}

