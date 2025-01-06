import Image from 'next/image'

export default function MainContent() {
  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-4xl font-bold mb-6">Bienvenido a Maya Token Homes</h1>
      <p className="mb-4">Invierte en propiedades de lujo a través de tokens digitales.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nuestras Propiedades</h2>
          <ul className="list-disc list-inside">
            <li>Villa de lujo en Tulum</li>
            <li>Apartamento frente al mar en Playa del Carmen</li>
            <li>Casa colonial en Mérida</li>
          </ul>
        </div>
        <div>
          <Image
            src="https://via.placeholder.com/400x300"
            alt="Propiedad destacada"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}