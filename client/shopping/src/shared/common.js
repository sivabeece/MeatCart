export const CommonProperties = {
  RESOURCE_API: "http://localhost:100",
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
