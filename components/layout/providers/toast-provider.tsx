import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const contextClass = {
  success: 'bg-blue-600',
  error: 'bg-red-600',
  info: 'bg-gray-600',
  warning: 'bg-orange-400',
  default: 'bg-indigo-600',
  dark: 'bg-white-600 font-gray-300',
}

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
