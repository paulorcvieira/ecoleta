const getEntries = (urlValue, typeValue) => {
  const url = urlValue ? urlValue : 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
  const type = typeValue ? typeValue : 'uf';

  const entrySelect = document.querySelector("select[name=" + type + "]");

  fetch(url)
    .then(res => res.json())
    .then(entries => {

      entries.map((entry) => {
        entrySelect.innerHTML += `<option value="${
          type === 'uf'
            ? entry.id
            : entry.nome}">${entry.nome}</option>`
      });
    });
}

const getCities = (event) => {
  const citySelect = document.querySelector("select[name=city]");
  const stateInput = document.querySelector("input[name=state]");

  const ufValue = event.target.value;
  const indexOfSelectedState = event.target.selectedIndex;

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

  citySelect.innerHTML = "<option>Selecione a Cidade</option>";

  stateInput.value = event.target.options[indexOfSelectedState].text;

  getEntries(url, 'city');

  citySelect.disabled = false;
}

getEntries();

document
  .querySelector("select[name=uf]")
  .addEventListener("change", getCities)



// Collect items
const itemsToCollect = document.querySelectorAll(".items-grid li");

const collectedItems = document.querySelector("input[name=items]");
let selectedItems = [];

const handleSelectedItem = (event) => {
  // console.log(event.target);
  const itemLi = event.target;
  const itemId = event.target.dataset.id;

  // add or remove event with js
  itemLi.classList.toggle("selected")

  // Verify items selected and get items selected
  const alreadySelected = selectedItems.findIndex(item => item === itemId);

  // selected and unselected
  if (alreadySelected >= 0) {
    const filteredItems = selectedItems.filter(item => item !== itemId);

    selectedItems = filteredItems;
  } else {
    selectedItems.push(itemId);
  }

  //console.log(selectedItems);

  // Update input hidden
  collectedItems.value = selectedItems;


}

for (const item of itemsToCollect) {
  item.addEventListener("click", handleSelectedItem);
}

