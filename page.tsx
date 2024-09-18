import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ChiNosLandingPage() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { src: 'CHINOS__ copia 4.jpg', alt: 'Chino pants style 1' },
    { src: '178.jpg', alt: 'Chino pants style 2' },
    { src: '197.jpg', alt: 'Chino pants style 3' },
    { src: 'chinos_07.jpg', alt: 'Chino pants style 4' },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-gray-800">ChiNos</a>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Inicio</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Estilos</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Contacto</a>
          </div>
        </div>
      </nav>

      <header className="bg-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Pantalones Chinos: Van con TODO</h1>
            <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
              Perfectos para cualquier ocasión: escuela, universidad, oficina. Con zapatos o con tenis. Con camiseta o con blazer.
            </p>
            <img src="/placeholder.svg?height=600&width=800" alt="Chino pants hero" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nuestros Estilos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(image)}
                className="cursor-pointer"
              >
                <img src={image.src} alt={image.alt} className="rounded-lg shadow-md" />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Características</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Versátiles</h3>
              <p>Combina con zapatos o tenis, perfectos para cualquier ocasión.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Cómodos</h3>
              <p>Diseñados para brindarte comodidad durante todo el día.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Elegantes</h3>
              <p>Eleva tu estilo sin esfuerzo, desde casual hasta semiformal.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center">&copy; 2023 ChiNos. Todos los derechos reservados.</p>
        </div>
      </footer>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={() => setSelectedImage(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white p-4 rounded-lg"
          >
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-h-[80vh] max-w-[80vw]" />
          </motion.div>
        </div>
      )}
    </div>
  )
}
