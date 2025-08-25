// STATE
let bank = [];
let odds = [];
let evens = [];

function sort() {
  let number = bank.shift();
  if (number % 2 != 0) {
    odds.push(number);
  } else {
    evens.push(number);
  }
}

function addNumber(number) {
  bank.push(number);
  render();
}

function sortOne() {
  sort();
  render();
}

function sortAll() {
  while (bank.length > 0) {
    sort();
  }
  render();
}

function OddEventsForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
    <label>
      Add a number to the bank
      <input name="count" type="number" min="1" />
    </label>
    <button id="add">Add Number</button>
    <button id="sortOne">Sort 1</button>
    <button id="sortAll">Sort All</button>
  `;

  $form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  return $form;
}

function Banks() {
  const $banks = document.createElement("h3");
  $banks.innerText = "Bank";

  return $banks;
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Odds and Events</h1>
    <OddEventsForm></OddEventsForm>
    <main>
      <Banks></Banks>
    </main>
  `;
  $app.querySelector("OddEventsForm").replaceWith(OddEventsForm());
  $app.querySelector("Banks").replaceWith(Banks());
}

render();
