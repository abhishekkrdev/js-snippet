// Question 5

const code = {
  type: "web",
};

const reactJS = {
  name: "js",
  web: true,
};

// A: reactJS[code.type] is not valid

// B: reactJS[reactJS["type"]] is not valid

// C: code.type.web is not valid

// D: All of them are valid

/*
 **C is not valid code.type is not an object
 */
