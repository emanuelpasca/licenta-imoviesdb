import { toast } from "react-toastify";

const useToastify = () => {
  const notify = (status, message) => {
    switch (status) {
      case "success":
        toast.success(`${message}`);
        break;
      case "error":
        toast.error(`${message}`);
        break;
      case "warning":
        toast.warning(`${message}`);
        break;
      default:
        toast(`${message}`);
    }
  };

  return notify;
};

export default useToastify;
