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

// form selector
const form = document.querySelector('form');

// form event listener
form.addEventListener('submit', function(event) {
  // prevent default form submission
  event.preventDefault();
  // input selector
  const input = document.querySelector('#perfect-square');
  // input value
  const inputValue = Number(input.value);
  console.log(typeof inputValue);
  // next perfect square
  const nextPerfectSquare = findNextSquare(inputValue);
  console.log(nextPerfectSquare)

  // check if input is a perfect square
  if (nextPerfectSquare === -1) {
    alert('NOT A PERFECT SQUARE');
  } else {
    alert('THE NEXT PERFECT SQUARE IS ' + nextPerfectSquare);
  }

  // empty input
  input.value = '';
});
