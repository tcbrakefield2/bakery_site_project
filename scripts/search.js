function searchSite() {

  let input = document.getElementById("search-input").value.toLowerCase();

  if (input.includes("menu") || input.includes("food") || input.includes("pastry") || input.includes("bread") || input.includes("cake") || input.includes("cookie") || input.includes("drinks")) {
    window.open("pages/menu-page.html", "_blank");
  }

  else if (input.includes("about") || input.includes("bakery")) {
    window.open("pages/about-page.html", "_blank");
  }

  else if (input.includes("contact") || input.includes("email") || input.includes("phone") || input.includes("location")) {
    window.open("pages/contact-page.html", "_blank");
  }

  else if (input.includes("special") || input.includes("deal") || input.includes("offer") || input.includes("discount")) {
    window.open("pages/specials-page.html", "_blank");
  }

  else if (input.includes("order") || input.includes("buy") || input.includes("purchase") || input.includes("cart")) {
    window.open("pages/order-page.html", "_blank");
  }

  else {
    alert("No results found.");
  }

  return false;
}