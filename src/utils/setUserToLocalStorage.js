export function setUserToLocalStorage(name, surname, birthYear, portfolio) {
  const user = {
    name: { label: "Имя", value: name },
    surname: { label: "Фамилия", value: surname },
    birthYear: { label: "Год рождения", value: birthYear },
    portfolio: { label: "Портфолио", value: portfolio }
  };
  localStorage.setItem("user", JSON.stringify(user))
}