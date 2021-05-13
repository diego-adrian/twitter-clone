const { REACT_APP_APPNAME } = process.env;
const Storage = {
  set: function (key, value) {
    if (window.localStorage) {
      window.localStorage.setItem(`${REACT_APP_APPNAME}_${key}`, value);
    } else {
      console.warn('Tu navegador no soporta localstorage');
    }
  },
  get: function (key) {
    let value = '';
    if (window.localStorage) {
      value = window.localStorage.getItem(`${ REACT_APP_APPNAME}_${key}`);
    }
    return value;
  }
};

export default Storage;