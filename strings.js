let outputArea = document.getElementById('output-area');
let submitBtn  = document.getElementById('submit-button');
let inputField = document.getElementById('input-field');
// var testString = "";




document.getElementById('submit-button');

submitBtn.addEventListener('click', function(event) {
  let inputValue = inputField.value;
  console.log('input value', inputValue);
  outputArea.innerHTML = inputValue;

  reversal(inputField.value);
  alphabits(inputField.value);
  palindrome(inputField.value);
});

input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    let inputfield = input.value;
    outputArea.innerHTML = inputfield;

    reversal(inputField.value);
    alphabits(inputField.value);
    palindrome(inputField.value);
  }
});


function reversal(testString) {

  return testString.split("").reverse().join("")

	document.getElementById("reverse").innerHTML = `${testString}`;
}

function alphabits() {

  return testString.split("").reverse().join("")

  document.getElementById("alphabetize").innerHTML = `${testString}`;
}

function palindrome() {

  return testString.split("").reverse().join("")

  document.getElementById("palindrome").innerHTML = `${testString}`;
}
