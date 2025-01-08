import { ButtonProps } from '@/interfaces'
const Button: React.FC<ButtonProps> = ({ text, buttonShape, buttonSize }) => {
  return (
    <div className="m-4">
      <button
        className={`bg-green-400 text-white px-6 py-2 capitalize ${buttonShape} ${buttonSize}`}
      >
        {text}
      </button>
    </div>
  )
}
export default Button
