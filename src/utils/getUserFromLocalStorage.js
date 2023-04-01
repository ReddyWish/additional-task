export function getUserFromLocalStorage() {
  const user = localStorage.getItem('user');
  if (user === null) {
    return null;
  } else {
    return JSON.parse(user);
  }
}