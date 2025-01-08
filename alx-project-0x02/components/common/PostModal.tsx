import { CardData, PostModalProps } from '@/interfaces'
import { useState } from 'react'
const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const [post, setPost] = useState<CardData>({ title: '', content: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setPost((prevPost) => ({ ...prevPost, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!post.title || !post.content) {
      alert('title and content are required')
      return
    }
    onSubmit(post)
    setPost({ title: '', content: '' })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
        <h2>Add</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
              placeholder="Please Enter Post Title"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-gray-700 font-medium mb-2"
            >
              Content
            </label>
            <input
              type="text"
              id="content"
              name="content"
              value={post.content}
              onChange={handleChange}
              placeholder="Please Enter Post Title"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default PostModal
