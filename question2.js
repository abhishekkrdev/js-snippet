// Question 2

for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 5);
}

for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 5);
}

/* Output
    4
    4
    4
    4
    0
    1
    2
    3
*/

/*
 ** var are functionally Scoped and let are blocked scoped
 */
