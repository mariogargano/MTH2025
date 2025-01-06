import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Maya Token Homes</Link>
        <ul className="flex space-x-4">
          <li><Link href="/about">Acerca de</Link></li>
          <li><Link href="/properties">Propiedades</Link></li>
          <li><Link href="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}