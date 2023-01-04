
// Documents
const passwordRandom = document.querySelector('.password-random p');
const copyIcon = document.querySelector('.password-random i');
const spanCopy = document.querySelector('.password-random span');
const inputLength = document.querySelector('input#length');
const button = document.querySelector('button');
const inputsCheckbox = document.querySelectorAll('input[type="checkbox"]');

// Variables
let numOfInput = inputLength.value;

// Function to add event listener in input length
inputLength.addEventListener('input', () => {
  numOfInput = '';
  if (parseInt(inputLength.value) >= 4 && parseInt(inputLength.value) <= 20) {
    numOfInput = inputLength.value;
  }
})

// Function to click on button 
button.addEventListener('click', () => {
  finishRandom(parseInt(numOfInput));
})

// Function To Make Random List
function finishRandom(numOfInput) {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '=', '-', '+', '?', '/', '\\', '\'', '>', ',', '<'];

  let arrayRand = {
    randomNum : numbers[Math.floor(Math.random() * numbers.length)],
    randomUpperLetter : uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)],
    randomLowerLetter : lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)],
    randomSymbol : symbols[Math.floor(Math.random() * symbols.length)]
  }

  let numOfChecked = 0;
  let randomString = '';

  inputsCheckbox.forEach((input) => {
    (input.checked) ? numOfChecked++ : false;
})

let randomAllOne = Math.floor(numOfInput / numOfChecked);

  inputsCheckbox.forEach((input) => {
    if (input.checked) {
      for(rand in arrayRand) {
        if (rand == input.dataset.rand) {
          for (let counter = 0; counter < randomAllOne; counter++) {
            arrayRand = {
              randomNum : numbers[Math.floor(Math.random() * numbers.length)],
              randomUpperLetter : uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)],
              randomLowerLetter : lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)],
              randomSymbol : symbols[Math.floor(Math.random() * symbols.length)]
            }
            randomString += arrayRand[rand];
          }
        }
      }
    } 
})

  inputsCheckbox.forEach((input) => {
    if (input.checked) {
      for(rand in arrayRand) {
        if (rand == input.dataset.rand) {
          for (let counter = 0; counter < numOfInput - randomString.length; counter++) {
            arrayRand = {
              randomNum : numbers[Math.floor(Math.random() * numbers.length)],
              randomUpperLetter : uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)],
              randomLowerLetter : lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)],
              randomSymbol : symbols[Math.floor(Math.random() * symbols.length)]
            }
            randomString += arrayRand[rand];
          }
        }
      }
    } 
  })

  let finishStringRandom = '';
  randomString = randomString.split('');

  if (randomString.length > 0) {
    for(counter = 0; counter < numOfInput; counter++) {
      let randNum = Math.floor(Math.random() * randomString.length);
      finishStringRandom += randomString[randNum];
      randomString.splice(randNum, 1);
    } 
  }

  passwordRandom.textContent = finishStringRandom;
}

copyIcon.addEventListener('click', () => {
  if (passwordRandom.innerHTML !== '') {
    navigator.clipboard.writeText(passwordRandom.textContent);
    spanCopy.innerHTML = 'Copied Password!!';
    window.setTimeout(() => {
      spanCopy.innerHTML = 'Copy Password';
    }, 1000)
  }
})
