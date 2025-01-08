import { type CardProps } from '@/interfaces'
const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-slate-200 shadow-md rounded-md max-w-lg hover:shadow-lg p-6">
      <h1 className="text-2xl font-normal text-center capitalize mb-4">
        {title}
      </h1>
      <p className="text-center capitalize">{content}</p>
    </div>
  )
}
export default Card
