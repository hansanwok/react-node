export const setUser = (user) => {
  localStorage.setItem('currentUser', JSON.stringify(user));
  localStorage.setItem('authToken', user.token);
  return JSON.parse(localStorage.getItem('currentUser'));
};