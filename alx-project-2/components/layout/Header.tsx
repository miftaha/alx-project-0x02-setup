import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header
