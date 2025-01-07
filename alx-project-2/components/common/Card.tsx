import { CardProps } from '@/interfaces'

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-slate-200 shadow-md rounded-md max-w-lg hover:shadow-lg">
      <h1 className="text-2xl font-normal text-center">{title}</h1>
      <p className="text-center">{content}</p>
    </div>
  )
}
export default Card
