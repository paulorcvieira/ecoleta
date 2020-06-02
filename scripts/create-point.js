const getEntries = (url, type) => {
  const entrySelect = document.querySelector("select[name=" + type + "]");

  fetch(url)
    .then(res => res.json())
    .then(entries => {
      entries.map((entry) => {
        entrySelect.innerHTML += `<option value="${entry.id}">${entry.nome}</option>`
      });
    });
}

const getCities = (event) => {
  const stateInput = document.querySelector("input[name=state]");
  const ufValue = event.target.value;
  const indexOfSelectedState = event.target.selectedIndex;
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

  stateInput.value = event.target.options[indexOfSelectedState].text;

  getEntries(url, 'city');

  document.querySelector("select[name=city]").disabled = false;
}

getEntries('https://servicodados.ibge.gov.br/api/v1/localidades/estados', 'uf');

document
  .querySelector("select[name=uf]")
  .addEventListener("change", getCities)