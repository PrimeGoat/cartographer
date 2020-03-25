/******************
 * YOUR CODE HERE *
 ******************/

const triple = function(num) {
  return num * 3;
}

const tripleAll = function(arr) {
  return arr.map(triple);
}

const getNegativeValue = function(num) {
  return (num > 0) ? num * -1 : num;
}

const negativeValues = function(arr) {
  return arr.map(getNegativeValue);
}

const makeQuestion = function(str) {
  return str + '?';
}

const questionings = function(arr) {
  return arr.map(makeQuestion);
}

const getInitials = function(str) {
  return str[0] + str[str.indexOf(' ') + 1];
}

const changeToInitials = function(arr) {
  return arr.map(getInitials);
}

const doubleIfEven = function(num) {
  return (num % 2 == 0) ? num * 2 : num;
}

const doubleEven = function(arr) {
  return arr.map(doubleIfEven);
}

const changeToTitleCase = function(str) {
  let wasSpace = true;
  let out = [];

  for(let i = 0; i < str.length; i++) {
    if(str[i] == ' ') {
      wasSpace = true;
      out += str[i];
    } else {
      if(wasSpace) {
        out += str[i].toUpperCase();
      } else {
        out += str[i].toLowerCase();
      }
      wasSpace = false;
    }
  }
  return out;
}

const titleCaseNames = function(arr) {
  return arr.map(changeToTitleCase);
}

const doubleEveryOther = function(arr) {
  let out = [];

  for(let i = 0; i < arr.length; i++) {
    out.push((i % 2 != 0) ? arr[i] * 2 : arr[i]);
  }

  return out;
}

/********************************
 * OUR CODE HERE - DON'T TOUCH! *
 ********************************/

if (typeof triple === 'undefined') {
  triple = undefined;
}

if (typeof tripleAll === 'undefined') {
  tripleAll = undefined;
}

if (typeof getNegativeValue === 'undefined') {
  getNegativeValue = undefined;
}

if (typeof negativeValues === 'undefined') {
  negativeValues = undefined;
}

if (typeof makeQuestion === 'undefined') {
  makeQuestion = undefined;
}

if (typeof questionings === 'undefined') {
  questionings = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleIfEven === 'undefined') {
  doubleIfEven = undefined;
}

if (typeof doubleEven === 'undefined') {
  doubleEven = undefined;
}

if (typeof changeToTitleCase === 'undefined') {
  changeToTitleCase = undefined;
}

if (typeof titleCaseNames === 'undefined') {
  titleCaseNames = undefined;
}

if (typeof doubleIfOddIndexed === 'undefined') {
  doubleIfOddIndexed = undefined;
}

if (typeof doubleEveryOther === 'undefined') {
  doubleEveryOther = undefined;
}


module.exports = {
  triple,
  tripleAll,
  getNegativeValue,
  negativeValues,
  makeQuestion,
  questionings,
  getInitials,
  changeToInitials,
  doubleIfEven,
  doubleEven,
  changeToTitleCase,
  titleCaseNames,
  doubleIfOddIndexed,
  doubleEveryOther,
}
