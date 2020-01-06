var cart = localStorage.getItem("cart");
var notAdded = localStorage.getItem("notAdded");
var id = localStorage.getItem("id");
var totalPrice = 0;

var cartItems = document.getElementById("number-of-items");

localStorage.setItem("cart", cart);
localStorage.setItem("notAdded", notAdded);
cartItems.innerHTML = cart;

var CheckoutPage = document.createElement('h1');
CheckoutPage.className = "checkout-text";
CheckoutPage.innerHTML = "Checkout";

var totalItems = document.createElement('h3');
totalItems.className = "item-name";
if(cart === 1)
totalItems.innerHTML = "Total Item: 1";
else
totalItems.innerHTML = "Total Items: " + cart;

var header = document.getElementById('header');

header.appendChild(CheckoutPage);
header.appendChild(totalItems);

function createCartItems(obj) {
var wrapper = document.createElement('div');
wrapper.className = "wrapper";

var itemWrapper = document.createElement('div');
itemWrapper.className = "item-wrapper";

var imageWrapper = document.createElement('div');
imageWrapper.className = "image-wrapper";
var itemImage = document.createElement('img');
itemImage.className = "item-image";
itemImage.src = obj.preview;

var contentWrapper = document.createElement('div');
contentWrapper.className = "content-wrapper";
var itemName = document.createElement('h3');
itemName.className = "item-name";
itemName.innerHTML = obj.name;

// var quantityWrapper = document.createElement('div');
// quantityWrapper.className = "quantity-wrapper";
// var quantityInText = document.createElement('p');
// quantityInText.innerHTML = "Quantity:";
var quantity = document.createElement('p');
quantity.innerHTML = "x1";
// quantityWrapper.appendChild(quantityInText);
// quantityWrapper.appendChild(quantity);

var itemPrice = document.createElement('p');
itemPrice.innerHTML = "Amount: Rs " + obj.price;
totalPrice = totalPrice + obj.price;

imageWrapper.appendChild(itemImage);
contentWrapper.appendChild(itemName);
// contentWrapper.appendChild(quantityWrapper);
contentWrapper.appendChild(quantity);
contentWrapper.appendChild(itemPrice);

itemWrapper.appendChild(imageWrapper);
itemWrapper.appendChild(contentWrapper);

wrapper.appendChild(itemWrapper);

var total = document.getElementById('total-amount');
total.innerHTML = totalPrice;

console.log(wrapper);
return wrapper;
}

var button = document.getElementById('btn');

button.onclick = function() {
    location.assign("Order Confirmation Page.html");
}

var mainDiv = document.getElementById('main');

var xhttp = new XMLHttpRequest();
xhttp.open('Get', 'https://5d76bf96515d1a0014085cf9.mockapi.io/product', true);
xhttp.onreadystatechange = function() {
    if(this.readyState === 4) {
        var data = JSON.parse(this.responseText);
        for(var i=0; i<data.length; i++) {
            if(localStorage.getItem(data[i].id+"notAdded") === "false")
                mainDiv.appendChild(createCartItems(data[i]));
        }
    }
}
xhttp.send(); 