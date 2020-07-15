export const hasLocalStorage = () => {
  if (!window?.localStorage) {
    return false;
  }
  try {
    const itemName = 'testItem';
    window.localStorage.setItem(itemName, 'test');
    window.localStorage.getItem(itemName);
    window.localStorage.removeItem(itemName);
    return true;
  } catch (e) {
    return false;
  }
};
