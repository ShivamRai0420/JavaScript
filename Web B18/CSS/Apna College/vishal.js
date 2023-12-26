var totalPrice = 0;

function calculateTotal() {
  totalPrice = 0;
  var productNames = document.querySelectorAll("input[name='product-name']");
  var productPrices = document.querySelectorAll("input[name='product-price']");
  var productQuantities = document.querySelectorAll("input[name='product-quantity']");
  for (var i = 0; i < productNames.length; i++) {
    var productName = productNames[i].value;
    var productPrice = productPrices[i].value;
    var productQuantity = productQuantities[i].value;
    totalPrice += productPrice * productQuantity;
  }
  document.getElementById("total-price").innerHTML = totalPrice;
}

document.querySelector("form").addEventListener("submit", calculateTotal);