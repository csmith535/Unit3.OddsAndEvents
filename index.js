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

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Odds and Events</h1>
    <SheepCount></SheepCount>
    <OddEventsForm></OddEventsForm>
    <main>
      <Pasture id="start"></Pasture>
      <figure class="fence">
        <img alt="fence" src="images/fence.png" />
      </figure>
      <Pasture id="target"></Pasture>
    </main>
  `;
  $app.querySelector("OddEventsForm").replaceWith(OddEventsForm());
  $app.querySelector("SheepCount").replaceWith(SheepCount());

  // Note: This is an example of how we can reuse the same component
  // to render two different (but similar) elements.
  $app.querySelector("Pasture#start").replaceWith(Pasture(start, true));
  $app.querySelector("Pasture#target").replaceWith(Pasture(target, false));
}

render();
