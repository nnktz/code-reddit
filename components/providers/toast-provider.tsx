import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ToastProvider = () => {
  return (
    <ToastContainer
      toastClassName={'dark:bg-gray-950 dark:text-white dark:border font-semibold text-black'}
      position="top-right"
      autoClose={5000}
      pauseOnHover
      pauseOnFocusLoss
      draggable
      hideProgressBar={false}
      closeButton={false}
      newestOnTop={false}
    />
  )
}
