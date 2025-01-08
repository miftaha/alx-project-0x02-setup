import { PostProps } from '@/interfaces'

const PostCard: React.FC<PostProps> = ({ title, userId, content, id }) => {
  return (
    <div className="max-w-xl mx-auto rounded-md shadow-sm hover:shadow-2xl bg-gray-100 p-6  duration-300">
      <div className="mb-4">
        <h1 className="font-semibold text-2xl text-gray-800">{title}</h1>
      </div>
      <p className=" text-gray-600">{content}</p>
      <div className="mt-6 flex justify-between items-center text-gray-500">
        <p>UserId: {userId}</p>
        <p>PostId: {id}</p>
      </div>
    </div>
  )
}
export default PostCard
