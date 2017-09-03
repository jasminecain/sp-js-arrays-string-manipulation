let outputArea = document.getElementById('output-area');
let submitBtn  = document.getElementById('submit-button');
let inputField = document.getElementById('input-field');
// var testString = "";

// !/^[a-zA-Z]*$/g  includes a to z;lower case/upper case !excludes: numbers, blank spaces, & symbols
function validate(value) {
  if (!/^[a-zA-Z]*$/g.test(value)) {
      alert("Invalid characters, text only!");
      return false;
  }
  return true;
}

document.getElementById('submit-button');

submitBtn.addEventListener('click', function(event) {
  let inputValue = inputField.value;

  if (validate(inputValue)) {
    console.log('input value', inputValue);
    outputArea.innerHTML = inputValue;

    reversal(inputValue);
    alphabits(inputValue);
    palindrome(inputValue);
  }
});

inputField.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    let inputValue = inputField.value;
    if (validate(inputValue)) {
      outputArea.innerHTML = inputValue;

      reversal(inputValue);
      alphabits(inputValue);
      palindrome(inputValue);
    }
  }
});


function reversal(testString) {

	document.getElementById("reverse").innerHTML = `${testString.split("").reverse().join("")}`;
}

function alphabits(testString) {

  document.getElementById("alphabetize").innerHTML = `${testString.split("").reverse().join("")}`;
}

function palindrome(testString) {

  document.getElementById("palindrome").innerHTML = `${testString.split("").reverse().join("")}`;
}
//Palindrome: word, phrase, number, or other sequence of characters which reads the same backward as forward
