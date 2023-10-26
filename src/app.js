// Progression 1: create a constant "NEG_INF" with -1000000 value, and a function createPop
const NEG_INF = -1000000;

// Progression 2: add 3 variables: title, currIndex, check
function createPop(title) {
  let currIndex = NEG_INF;
  let check = false;

  // Progression 3: create a function "searchForElement"
  function searchForElement(arr, item) {
    if (arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          currIndex = i;
          check = true;
          return;
        }
      }
    }
  }
  return function (arr, item) {
    searchForElement(arr, item);
    if (check) {
      return `The item is present and is at index ${currIndex}`;
    } else {
      return `The item is not present and is at index ${currIndex}`;
    }
  }
}

// Progression 4: In `createPop()`, return a function - which uses the updated values of `currIndex` and `check`

const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const itemToSearch = 4;
const searchItem = createPop();
console.log(searchItem(arrayOfNumbers, itemToSearch));
