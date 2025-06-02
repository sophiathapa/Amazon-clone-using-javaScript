import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

async function loadPage() {

  try {                                         //error handeling

    // throw 'error1';          //manually create error

    await loadProductsFetch();

    const value = await new Promise((resolve,reject) => {
      // throw 'error2';
      loadCart(() => {
        // reject('error3');   //future errors
        resolve();
      });
    });

  } catch (error){
    console.log('Unexpected error. Please try again later')
  }

  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();

// //promise.all runs the async function at the same time
// Promise.all([
//   loadProductsFetch(),

// new Promise((resolve) => {
//       loadCart(() => {
//         resolve();
//       });
//     })

// ]).then((values)=>{
//   console.log(values);
//   renderOrderSummary();
//     renderPaymentSummary();
// });

//using promise
// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve('value1');
//   });
// })
//   .then((value) => {

//     console.log(value)
//     return new Promise((resolve) => {
//       loadCart(() => {
//         resolve();
//       });
//     });
//   })
//   .then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });

// //Async function using call back function
// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });
