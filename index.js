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

    const formData = new FormData($form);
    const number = formData.get("count");

    if (event.submitter.id === "add") {
      addNumber(number);
    } else if (event.submitter.id === "sortOne") {
      sortOne();
    } else if (event.submitter.id === "sortAll") {
      sortAll();
    }
  });

  return $form;
}

function numberInBank(x) {
  let $span = document.createElement("span");
  $span.textContent = x;
  return $span;
}

function Banks(label, numbers) {
  const $banks = document.createElement("section");
  $banks.innerHTML = `
  <h3>${label}</h3>
  <data><data>
  `;

  const $numbers = numbers.map(numberInBank);
  $banks.querySelector("data").replaceChildren(...$numbers);

  return $banks;
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Odds and Events</h1>
    <OddEventsForm></OddEventsForm>
    <main>
      <Banks id="bank"></Banks>
      <Banks id="odds"></Banks>
      <Banks id="evens"></Banks>
    </main>
  `;
  $app.querySelector("OddEventsForm").replaceWith(OddEventsForm());
  $app.querySelector("Banks#bank").replaceWith(Banks("Bank", bank));
  $app.querySelector("Banks#odds").replaceWith(Banks("Odds", odds));
  $app.querySelector("Banks#evens").replaceWith(Banks("Evens", evens));
}

render();
