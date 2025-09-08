import { toast, Bounce } from "react-toastify";

const SuccessToast = (messge) => {
  toast(messge, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};
const ErrorToast = (messge) => {
  toast.error(messge, {
    position: "top-bottom",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "warning",
    transition: Bounce,
  });
};

const maxLengthCheck = (e) => {
  if (e.target.value > 0) {
    return (e.target.value = e.target.value.slice(0, e.target.maxLength));
  } else {
    return (e.target.value = "");
  }
};

const onlyString = (element) => {
  element.value = element.value.replace(/[^a-zA-Z]+/, "");
};

export { SuccessToast, ErrorToast, maxLengthCheck, onlyString };
