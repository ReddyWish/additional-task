export function creatingCorrectAge(yearOfBirth) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - yearOfBirth;

  let ageString = age.toString();
  const lastDigit = ageString.at(-1);

  let wordEnding;
  if (lastDigit === "1") {
    wordEnding = "год"
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    wordEnding = "года"
  } else {
    wordEnding = "лет"
  }
return `${ageString} ${wordEnding}`
}
