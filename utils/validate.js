export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return reg.test(url);
}

export function validLowerCase(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

export function validUpperCase(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

export function validKana(text) {
  if (text === null || text === undefined) return null;
  const re = /^[\ｦ-ﾟ\u30a0-\u30ff]+$/;
  return re.test(text);
}

export function validText(text) {
  if (text === null || text === undefined) return null;
  const re = /^[\A-Za-z\Ａ-Ｚａ-ｚ\ｦ-ﾟ\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf]+$/;
  return re.test(text);
}

export function validNumber(data, length) {
  if (data === null || data === undefined) return null;
  const re = /^[0-9]+$/;
  return re.test(data) && data.length === length;
}

export function validPostal(data) {
  if (data === null || data === undefined) return null;
  const re = /^[0-9]{3}-?[0-9]{4}$/;
  return re.test(data);
}

export function validTel(data) {
  if (data === null || data === undefined) return null;
  const re = /^[0-9]{3}-?[0-9]{3,4}-?[0-9]{3,4}$/;
  return re.test(data);
}

export function validEmail(email) {
  if (email === null || email === undefined) return null;
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export function validBirthdayYear(year) {
  if (year === null || year === undefined) return null;
  const age = new Date().getFullYear() - Number(year);
  return age > 15 && age < 85;
}
export function validMonth(data) {
  if (data === null || data === undefined) return null;
  const month = Number(data);
  return month > 0 && month < 13;
}
export function validDay(data) {
  if (data === null || data === undefined) return null;
  const month = Number(data);
  return month > 0 && month < 32;
}
