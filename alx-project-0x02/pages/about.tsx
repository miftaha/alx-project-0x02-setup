import Button from '@/components/common/Button'
const About = () => {
  return (
    <main className="px-4">
      <Button text="Add" buttonShape="rounded-sm" buttonSize="text-sm" />
      <Button text="Remove" buttonShape="rounded-md" buttonSize="text-md" />
      <Button text="Add" buttonShape="rounded-full" buttonSize="text-lg" />
    </main>
  )
}
export default About
