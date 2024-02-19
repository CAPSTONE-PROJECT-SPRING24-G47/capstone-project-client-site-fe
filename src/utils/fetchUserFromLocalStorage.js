export const fetchUserFromLocalStorage = () => {
  const userData =
    localStorage.getItem('user') !== 'undefined'
      ? JSON.parse(localStorage.getItem('user'))
      : null;

  return userData;
};
