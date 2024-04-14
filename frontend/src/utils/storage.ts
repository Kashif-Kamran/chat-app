export const setItemToLocalStoarge = (name: string, value: string) =>
  localStorage.setItem(name, value);

export const getItemFromLocalStorage = (name: string) =>
  localStorage.getItem(name);

export const removeItemFromLocalStorage = (name: string) =>
  localStorage.removeItem(name);

export const removeAllFromLocalStorage = () => localStorage.clear();

export const setItemToSessionStorage = (name: string, value: string) =>
  sessionStorage.setItem(name, value);

export const getItemFromSessionStorage = (name: string) =>
  sessionStorage.getItem(name);

export const removeItemFromSessionStorage = (name: string) =>
  sessionStorage.removeItem(name);
