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
  buttonSize: 'text-sm' | 'text-md' | 'text-lg'
  buttonShape: 'rounded-sm' | 'rounded-md' | 'rounded-full'
  text: string
}
