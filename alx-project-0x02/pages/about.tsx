import Button from '@/components/common/Button'
import Header from '@/components/layout/Header'
const About = () => {
  return (
    <div>
      <Header />
      <main className="px-4">
        <Button text="Add" shape="rounded-sm" size="small" />
        <Button text="Remove" shape="rounded-md" size="medium" />
        <Button text="Add" shape="rounded-full" size="large" />
      </main>
    </div>
  )
}
export default About
