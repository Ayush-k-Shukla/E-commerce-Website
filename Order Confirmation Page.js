var cartItems = document.getElementById("number-of-items");
cartItems.innerHTML = 0;

localStorage.setItem("cart", 0);
var product = localStorage.getItem("product");
localStorage.setItem("product","[]");

// var xhttp = new XMLHttpRequest();
// xhttp.open('POST', 'https://5d76bf96515d1a0014085cf9.mockapi.io/order', true);
// const data = {"id":position,
//     "createdAt":new Date(),
//     "name":"Mr. Lajat Pragyan Panda",
//     "avatar":"https://hindijaankaari.in/wp-content/uploads/2019/01/Dp_download.jpg"
//     };

// http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

// xhttp.onreadystatechange = function() {
//     if(this.readyState === 4) {
//         var response = JSON.parse(this.responseText);
//         var position = response.length + 1;
//     response.push(data);
//     }
// }
// xhttp.send();
// xhttp.send(data);

// const Url = 'https://5d76bf96515d1a0014085cf9.mockapi.io/order';
// const data = {"id":i+1,
// "createdAt":new Date(),
// "name":"Mr. Lajat Pragyan Panda",
// "avatar":"https://hindijaankaari.in/wp-content/uploads/2019/01/Dp_download.jpg"
// };

// $('.btn').click(function(){
//     $.post(Url,data, function(data, status){
//         console.log('${data} and status is ${status}')
//     });
// })