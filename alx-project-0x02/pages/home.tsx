import Card from '@/components/common/Card'
import PostModal from '@/components/common/PostModal'
import { CardData } from '@/interfaces'
import { useState } from 'react'
import Header from '@/components/layout/Header'
const cards = [
  { id: 1, title: 'card1', content: 'This is the content of card1' },
  { id: 2, title: 'card2', content: 'This is the content of card2' },
  { id: 3, title: 'card3', content: 'This is the content of card3' },
  { id: 4, title: 'card4', content: 'This is the content of card4' },
]

const Home = () => {
  const [isModalOpening, setIsModalOpening] = useState(false)
  const [posts, setPosts] = useState<CardData[]>(cards)

  const handleAddProperty = ({ title, content }: CardData) => {
    // const newPost: CardData = { id: posts.length + 1, title, content }
    setPosts([...posts, { title, content, id: posts.length + 1 }])
  }
  return (
    <div className="container mx-auto">
      <Header />
      <main className="h-screen p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-center p-4">Property List</h1>
          <button
            className="px-4 py-3 bg-green-400 text-white rounded-full"
            onClick={() => setIsModalOpening(true)}
          >
            Add Property
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {posts.map((card) => (
            <Card title={card.title} content={card.content} key={card.id} />
          ))}
        </div>
      </main>
      {isModalOpening && (
        <PostModal
          onClose={() => setIsModalOpening(false)}
          onSubmit={handleAddProperty}
        />
      )}
    </div>
  )
}
export default Home
