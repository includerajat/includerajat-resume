const name = document.querySelector(".name");
const company = document.querySelector(".company");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const nameValue = urlParams.get("name");
const companyValue = urlParams.get("company");

if (nameValue) {
  name.innerHTML = nameValue;
}

if (companyValue) {
  company.innerHTML = companyValue;
}
