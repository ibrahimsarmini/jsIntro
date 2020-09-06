/*
    1. Input Output
    Write a program that takes in 3 Numbers,
    store them into localStorage.
    The next time you vist the page (reload)
    these numbers should be printed out in the
    console.

    Bonus: Not in the console make some nice looking
    html out of it.

    2. When you click at one of those numbers,
    ask for a new number, and save into localStorage again,
    in the exact same place, or key.

    Hint: Look at Promises, Fetch
            (Async functions)
*/

const key = "saved-items";

function set(...numbers) {
  localStorage.setItem(key, JSON.stringify(numbers));
}

set(1, 2, 3);

const items = JSON.parse(localStorage.getItem(key));

if (items) {
  items.forEach((item) => {
    console.log(item);
  });
}
