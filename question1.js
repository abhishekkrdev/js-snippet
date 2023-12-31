// Question 1

function showData() {
  console.log("variable name is ", name);
  console.log("variable name is ", age);

  var name = "Noren Red";
  let age = 999;
}

showData();

// variable name is undefined
// Reference Error: Cannot access 'age' before initialization

/* 
** Hoisting is basically variables and function decalration are moved to top.

** let and const are hoisted but we can not access them just like vars.

** In case of let and const, we have a thing called temporal dead zone, they are hoisted but not available to be accessed

*/
