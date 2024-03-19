const name = document.querySelector(".name");
const company = document.querySelector(".company");
const preview = document.querySelector(".resume-preview");
const download = document.querySelector(".resume-download");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const nameValue = urlParams.get("name");
const companyValue = urlParams.get("company");

const previewUrl = `https://drive.google.com/file/d/${
  urlParams.get("id") ?? "1llEd-rSzqsP9J52q-P-GgqPkIm8cD4YO"
}/preview`;
const downloadUrl = `https://drive.google.com/uc?export=download&id=${
  urlParams.get("id") ?? "1llEd-rSzqsP9J52q-P-GgqPkIm8cD4YO"
}`;

if (nameValue) {
  name.innerHTML = nameValue;
}

if (companyValue) {
  company.innerHTML = companyValue;
}

preview.src = previewUrl;
download.href = downloadUrl;
