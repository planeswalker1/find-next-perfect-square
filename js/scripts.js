// Return the next square if sq if a perfect square, -1 otherwise
function findNextSquare(square) {
  // check if square is a perfect square
  if ((Math.sqrt(square) % 1 === 0)) {
    // console.log(square + ' is a perfect square');
    return Math.pow((Math.sqrt(square) + 1), 2);
  } else {
    // console.log(square + ' is not a perfect square');
    return -1;
  }
}

// change textContent of span to solution
function addSolution (input) {
  // console.log(span);
  span.textContent = input;
}

// selectors
const form = document.querySelector('form');
const span = document.querySelector('.solution__span');
const input = document.querySelector('#perfect-square');

// form event listener
form.addEventListener('submit', function(event) {
  // prevent default form submission action
  event.preventDefault();
  // console.log(input);
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
