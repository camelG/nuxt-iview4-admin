import axios from "axios";

axios.interceptors.response.use(response => {
  const address =
    response.data &&
    response.data.data &&
    response.data.data[0] &&
    response.data.data[0].ja;

  if (!address) return;

  return {
    pref: address.prefecture ? address.prefecture : null,
    city: address.address1 ? address.address1 : null,
    town: address.address2 ? address.address2 : null,
    code: address.address3 ? address.address3 : null,
    building: address.address4 ? address.address4 : null
  };
});

// getPostalCode
export function getPostalCode(code) {
  if (code.length < 7 || code.length > 8) return;
  const url = "https://madefor.github.io/postal-code-api/api/v1/";
  return axios.get(url + code.slice(0, 3) + "/" + code.slice(-4) + ".json");
}
