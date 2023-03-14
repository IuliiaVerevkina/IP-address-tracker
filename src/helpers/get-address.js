export async function getAddress(ip) {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_8IBSV5VS8Qs8ww1Qbjs1WSgWyVbAL&ipAddress=${ip}`
  );
  return await response.json();
}
