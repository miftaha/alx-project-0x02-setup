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
  buttonSize: 'small' | 'medium' | 'large'
  buttonShape: 'rounded-sm' | 'rounded-md' | 'rounded-full'
  text: string
}
