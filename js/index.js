// ITERATION 1
/* get DOM elements price & quantity ; 
create a value = price * quantity;
set the subtotal price to the corresponding DOM element */

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector('.price span').innerText);
  const quantity = product.querySelector('.quantity input').value;
  const result = price * quantity;
  product.querySelector('.subtotal span').innerText = result;
  return result;
}

// ITERATION 2
//Complete the function named calculateAll()
// ITERATION 3
//Calculate the total price for the products in your cart by the sum of subtotals

function calculateAll() {
  const productArray = document.querySelectorAll('.product');
  let total = 0;
  productArray.forEach((product) => {
    const res = updateSubtotal(product);
    total += res;
  });
  document.querySelector('#total-value span').innerText = total;
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
