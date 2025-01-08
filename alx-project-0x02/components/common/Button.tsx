import { type ButtonProps } from '@/interfaces'
const Button: React.FC<ButtonProps> = ({ text, size, shape }) => {
  const sizeClass = size
    ? {
        small: 'text-sm',
        medium: 'text-md',
        large: 'text-lg',
      }[size]
    : 'text-lg'

  return (
    <div className="m-4">
      <button
        className={`bg-green-400 text-white px-6 py-2 capitalize ${shape} ${sizeClass}`}
      >
        {text}
      </button>
    </div>
  )
}
export default Button
