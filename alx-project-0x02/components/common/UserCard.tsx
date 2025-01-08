import { UserProps } from '@/interfaces'

const UserCard: React.FC<UserProps> = ({ name, username, email, address }) => {
  return (
    <div className="max-w-xl  rounded-md shadow-sm border-white hover:shadow-xl p-6 bg-gray-100 transition-shadow duration-300">
      <h2 className="font-bold text-lg mb-4">User Details</h2>
      <div className="flex justify-between mb-4">
        <span className="font-medium">Name:</span>
        <span>{name}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="font-medium">User Name:</span>
        <span>@{username}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="font-medium">Email:</span>
        <span>{email}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="font-medium">Address:</span>
        <span>
          {address.street}, {address.suite}, {address.city}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Geo Location:</span>
        <span>
          Lat:{address.geo.lat},Lng:{address.geo.lng}
        </span>
      </div>
    </div>
  )
}
export default UserCard
