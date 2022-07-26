// SET STORAGE
const setLanguage = (language: any) => {
  localStorage.setItem('language', JSON.stringify(language));
};

// GET FROM STORAGE
const getLanguage = () =>
  JSON.parse(localStorage.getItem('language') || '{"":""}');

// Remove items from storage
export const removeItemFromStorage = (key: any) => localStorage.removeItem(key);

export { setLanguage, getLanguage };
