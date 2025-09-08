const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  currentYear = new Date().getFullYear();

export const Utility = {
  getdropdwon: (filter, data) => {
    const _dropdown = [];
    const _data = data.filter((d) => {});
    for (let m = 0; m < monthNames.length; m++) {
      let _monthYear = {};
      _monthYear.key = m;
      _monthYear.text = `${monthNames[m]} - ${currentYear}`;
      _monthYear.value = `${monthNames[m]} - ${currentYear}`;
      _dropdown.push(_monthYear);
    }
    return _dropdown;
  },
  getAllMonth: () => {
    const _months = [];
    for (let m = 0; m < monthNames.length; m++) {
      let _monthYear = {};
      _monthYear.key = m;
      _monthYear.text = `${monthNames[m]}`;
      _monthYear.value = `${monthNames[m]}`;
      _months.push(_monthYear);
    }
    return _months;
  },
  getCurrentYear: () => {
    return currentYear;
  },
  getAllMonths: () => {
    return monthNames;
  },
  getFinancialYear: () => {
    const _fyear = [];
    const _year = currentYear - 2017;
    for (let m = _year; m > -1; ) {
      let _monthYear = {};
      _monthYear.key = m;
      _monthYear.text = `${currentYear}` - m;
      _monthYear.value = `${currentYear}` - m;
      _fyear.push(_monthYear);
      m--;
    }
    return _fyear;
  },

  superadmin: {
    menu: [2, 3, 13, 14],
    username: "superadmin",
    password: "123",
    access: {
      all: true,
      view: true,
      add: true,
      edit: true,
      delete: true,
    },
  },
  admin: {
    menu: [19],
    username: "admin",
    password: "123",
    access: {
      all: true,
      view: true,
      add: true,
      edit: true,
      delete: true,
    },
  },
  employeemenu: {
    menu: [2, 3, 13, 14, 19],
  },
  user: "user",

  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  },

  validateGSTIN(gstin) {
    const gstinRegex =
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    return gstinRegex.test(gstin);
  },

  validatepan(pan) {
    const panRegex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    return panRegex.test(pan);
  },

  validatecin(cin) {
    const cinRegex =
      /'^([LUu]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})?$'/;
    return cinRegex.test(cin);
  },

  generateHaskKey(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  },
};
