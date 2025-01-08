import PostCard from '@/components/common/PostCard'
import Header from '@/components/layout/Header'
import { type PostProps } from '@/interfaces'

interface Posts {
  posts: PostProps[]
}

const Posts: React.FC<Posts> = ({ posts }) => {
  console.log(posts)
  return (
    <div>
      <Header />
      <main className="px-4">
        <h1 className="text-center text-2xl font-bold">Post Page</h1>
        <div className="grid grid-cols-3 gap-3">
          {posts.map(({ title, content, userId, id }) => {
            return (
              <PostCard
                title={title}
                content={content}
                userId={userId}
                key={id}
                id={id}
              />
            )
          })}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  const mappedPost = posts.map((post: any) => ({ ...post, content: post.body }))
  return {
    props: { posts: mappedPost },
  }
}
export default Posts
