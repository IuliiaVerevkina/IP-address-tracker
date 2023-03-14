import {validateIp} from './helpers';

const ipInput = document.querySelector(".search-bar__input");
const btn = document.querySelector(".search-bar__btn");

btn.addEventListener("click", getDate);
ipInput.addEventListener("keydown", handleKey);

function getDate() {
	if(validateIp(ipInput.value)) {
		fetch(
    `https://geo.ipify.org/api/v2/country?apiKey=at_8IBSV5VS8Qs8ww1Qbjs1WSgWyVbAL&ipAddress=${ipInput.value}`
  )
    .then((response) => response.json())
    .then(console.log);
	}
}

function handleKey(e) {
  if (e.key === "Enter") {
    getDate();
  }
}
