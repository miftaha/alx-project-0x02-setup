import UserCard from '@/components/common/UserCard'
import Header from '@/components/layout/Header'
import { type UserProps } from '@/interfaces'

interface Users {
  users: UserProps[]
}
const Users: React.FC<Users> = ({ users }) => {
  console.log(users)
  return (
    <div className="">
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-semibold text-center p-4">User Page</h1>
        <div className="grid grid-cols-3 gap-4">
          {users.map(({ id, username, name, address, email }) => (
            <UserCard
              name={name}
              key={id}
              username={username}
              address={address}
              email={email}
              id={id}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()

  return {
    props: { users },
  }
}
export default Users
