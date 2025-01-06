import Link from 'next/link'

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default Header
