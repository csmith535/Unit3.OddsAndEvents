function OddEventsForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
    <label>
      Add a number to the bank
      <input name="count" type="number" min="1" />
    </label>
    <button>Add Number</button>
    <button>Sort 1</button>
    <button>Sort All</button>
  `;

  return $form;
}

function Banks() {
  const $banks = document.createElement("h3");
  $banks.innerText = "Bank, Odds, Evens";

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
