let btnShopping = document.getElementById("btnShopping"),
  viewMyCart = document.getElementById("viewMyCart"),
  clickCounter = 0;

btnShopping.addEventListener("click", () => {
  if (clickCounter == 0) {
    btnShopping.classList.add("shoppingActive");
    btnShopping.classList.remove("scaleActive");

    viewMyCart.classList.add("viewMyCartActive");

    clickCounter = 1;
  } else {
    btnShopping.classList.remove("shoppingActive");
    btnShopping.classList.add("scaleActive");

    viewMyCart.classList.remove("viewMyCartActive");

    clickCounter = 0;
  }
});
