
const Swal = require("sweetalert2");
export function validateIp(ip) {
  if (
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(
      ip
    )
  ) {
    return true;
  }
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "You have to enter a valid IP address!",
  });
  return false;
}
