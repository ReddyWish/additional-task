export function checkUserInLocalStorage() {
  const user = localStorage.getItem("user");
  return user
}