import { toast } from "react-toastify";

const useToast = () => {
  const options = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };
  const toastSuccess = (message) => {
    toast.success(message, options);
  };
  const toastError = (message) => {
    toast.error(message, options);
  };

  return { toastSuccess, toastError };
};
export default useToast;
