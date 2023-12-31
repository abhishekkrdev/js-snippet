// Question 3

const income = {
  skills: 108,
  monthly() {
    return this.skills * 108;
  },
  yearly: () => 888 * this.skills,
};

console.log(income.monthly()); // 108 * 108
console.log(income.yearly()); // NaN

/*
 ** Normal Functions have their own this but arrow function don't have their own this(parent scope).

 ** https://rahuulmiishra.medium.com/this-keyword-in-javascript-2c9a206a904a

 ** https://dmitripavlutin.com/javascript-this-interview-questions/

 ** https://www.youtube.com/watch?v=-NnxwkJ4yIg
 */
