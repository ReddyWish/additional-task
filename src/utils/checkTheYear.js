export function checkTheYear(year) {
  const currentYear = new Date().getFullYear();
  if (Number(year) <= Number(currentYear)) {
    return true;
  } else {
    return false;
  }
}
