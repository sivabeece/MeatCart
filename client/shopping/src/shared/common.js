export const CommonProperties = {
  RESOURCE_API: "http://localhost:100",
  GOOGLE_CLIENT_ID:
    "988445299950-7ohtn6gt7ohummqje0sq61maor1hd7nk.apps.googleusercontent.com",
};

export const ModalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { open: true, dimmer: action.dimmer };
    case "CLOSE_MODAL":
      return { open: false };
    default:
      throw new Error();
  }
};

export const formatCurrency = (currency) => {
  return String(currency).replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
};
