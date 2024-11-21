import { Id, toast, ToastOptions } from 'react-toastify';

export enum typeToasts {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  LOADING = 'LOADING',

}
export const notify = (type: typeToasts, message: string): Id => {
  const configToast: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  }
  if (type === typeToasts.SUCCESS) return toast.success(message, configToast)
  if (type === typeToasts.ERROR) return toast.error(message, configToast)
  if (type === typeToasts.LOADING) return toast.loading(message, configToast)

  return toast.info('')
};

