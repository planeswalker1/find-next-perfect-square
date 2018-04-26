// Return the next square if sq if a perfect square, -1 otherwise
function findNextSquare(sq) {
  // check if sq is a perfect square
  if (!(Number.isInteger(Math.sqrt(sq)))) {
      return -1;
  }
  // while condition variable
  let foundNextPerfectSquare = false;
  // number to test if perfect square
  let currentNumber = sq + 1;
  // check if currentNumber is a perfect square
  while(!foundNextPerfectSquare) {
    if (Number.isInteger(Math.sqrt(currentNumber))) {
      foundNextPerfectSquare = true;
      return currentNumber;
    } else {
      currentNumber++;
    }
  }
}

// change textContent of span to solution
function addSolution (input) {
  const span = document.querySelector('.solution__span');
  // console.log(span);
  span.textContent = input;
}

// form selector
const form = document.querySelector('form');

// form event listener
form.addEventListener('submit', function(event) {
  // prevent default form submission action
  event.preventDefault();
  // input selector
  const input = document.querySelector('#perfect-square');
  // console.log(input);
  // input value
  const inputValue = Number(input.value);
  // console.log(typeof inputValue);
  // console.log(inputValue);
  // check next perfect square
  const nextPerfectSquare = findNextSquare(inputValue);
  // console.log(nextPerfectSquare);
  // check if input is empty
  if (input.value.length === 0) {
    addSolution('Please enter a perfect square!');
    // check if input is a perfect square
  } else if (nextPerfectSquare === -1) {
    addSolution('Not a perfect Square! Try again.');
  } else {
    addSolution('The next perfect square is ' + nextPerfectSquare + '.');
  }
});
