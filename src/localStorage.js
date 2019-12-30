export const get = key => {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (err) {
    return undefined;
  }
};

export const set = (key, value) => {
  try {
    return window.localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    return undefined;
  }
};
