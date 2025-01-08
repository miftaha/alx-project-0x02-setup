import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-slate-400 py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h3 className="text-4xl font-bold">
          <Link href="/">ALX</Link>
        </h3>
        <nav>
          <ul className="flex space-x-5">
            <li className="text-xl hover:underline">
              <Link href="/home">Home</Link>
            </li>
            <li className="text-xl hover:underline">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header
