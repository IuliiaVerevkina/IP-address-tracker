import {validateIp} from './helpers';

const ipInput = document.querySelector(".search-bar__input");
const btn = document.querySelector(".search-bar__btn");

const ipInfo = document.getElementById('ip');
const locationInfo = document.getElementById("location");
const timezoneInfo = document.getElementById("timezone");
const ispInfo = document.getElementById("isp");

btn.addEventListener("click", getDate);
ipInput.addEventListener("keydown", handleKey);

function getDate() {
	if(validateIp(ipInput.value)) {
		fetch(
    `https://geo.ipify.org/api/v2/country?apiKey=at_8IBSV5VS8Qs8ww1Qbjs1WSgWyVbAL&ipAddress=${ipInput.value}`
  )
    .then((response) => response.json())
    .then(data => setInfo(data));
	}
}

function handleKey(e) {
  if (e.key === "Enter") {
    getDate();
  }
}

function setInfo(mapData) {
	console.log(mapData)
	ipInfo.innerText = mapData.ip;
	locationInfo.innerText = mapData.location.country + " " + mapData.location.region;
	timezoneInfo.innerText = mapData.location.timezone;
	ispInfo.innerText = mapData.isp;
}
