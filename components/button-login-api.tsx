import { IconType } from 'react-icons'
import { Button } from './ui/button'

interface ButtonLoginApiProp {
  label: string
  icon: IconType
}

export const ButtonLoginApi = ({ label, icon: Icon }: ButtonLoginApiProp) => {
  return (
    <button className="flex w-full items-center rounded-2xl border border-solid bg-white px-6 py-2 text-gray-700 transition hover:opacity-75">
      <Icon />

      <div className="flex w-full items-center justify-center text-sm">{label}</div>
    </button>
  )
}
