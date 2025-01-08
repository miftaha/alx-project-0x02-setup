import { ButtonProps } from '@/interfaces'
const Button: React.FC<ButtonProps> = ({ text, buttonShape, buttonSize }) => {
  return (
    <button className="bg-green-400 text-sm text-white rounded-sm px-6 py-3 capitalize">
      {text}
    </button>
  )
}
export default Button
