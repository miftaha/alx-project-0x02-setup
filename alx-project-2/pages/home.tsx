import Card from '@/components/common/Card'

const Home = () => {
  const cards = [
    { id: 1, title: 'card1', content: 'This is the content of card1' },
    { id: 2, title: 'card2', content: 'This is the content of card2' },
    { id: 3, title: 'card3', content: 'This is the content of card3' },
    { id: 4, title: 'card4', content: 'This is the content of card4' },
  ]
  return (
    <div className="container mx-auto">
      <main className="h-screen p-6">
        <h1 className="text-3xl font-bold text-center p-4">Property List</h1>
        <div className="grid grid-cols-3 gap-4">
          {cards.map((card) => (
            <Card title={card.title} content={card.content} key={card.id} />
          ))}
        </div>
      </main>
    </div>
  )
}
export default Home
