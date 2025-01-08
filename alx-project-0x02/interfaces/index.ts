export interface CardProps {
  id?: number
  title: string
  content: string
}

export interface CardData {
  id?: number
  title: string
  content: string
}

export interface PostModalProps {
  onClose: () => void
  onSubmit: ({ title, content }: CardData) => void
}

export interface ButtonProps {
  size: 'small' | 'medium' | 'large'
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full'
  text: string
}

export interface PostProps {
  title: string
  content: string
  userId: number
  id?: number
}

interface Geo {
  lat: string
  lng: string
}

interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface UserProps {
  id?: number
  name: string
  username: string
  email: string
  address: Address
}
