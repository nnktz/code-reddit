import { IconType } from 'react-icons'

interface ButtonLoginApiProp {
  label: string
  icon: IconType
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

export const ButtonLoginApi = ({ label, icon: Icon }: ButtonLoginApiProp) => {
  return (
    <button className="flex w-full items-center rounded-2xl border border-solid bg-white px-6 py-2 text-gray-700 transition hover:opacity-75">
      <Icon size={24} />

      <div className="flex w-full items-center justify-center text-sm">{label}</div>
    </button>
  )
}
