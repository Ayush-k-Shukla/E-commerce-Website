console.log("JS LOADED");

var cart = localStorage.getItem("cart");
var notAdded = localStorage.getItem("notAdded");
var id = localStorage.getItem("id");

var cartItems = document.getElementById("number-of-items");

localStorage.setItem("cart", cart);
localStorage.setItem("notAdded", notAdded);
cartItems.innerHTML = cart;

// var xhttp = new XMLHttpRequest();
// xhttp.open('POST', 'https://5d76bf96515d1a0014085cf9.mockapi.io/order', true);
// xhttp.onreadystatechange = function() {
//     if(this.readyState === 4) {
//         var data = JSON.parse(this.responseText);
//         for(var i=0; i<data.length; i++) {
            
//         }
//     }
// }
// xhttp.send();