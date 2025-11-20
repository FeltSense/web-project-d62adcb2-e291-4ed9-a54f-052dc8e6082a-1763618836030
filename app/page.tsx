import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header/Navbar Placeholder */}
      <header className="fixed top-0 left-0 w-full bg-gray-950 bg-opacity-90 z-50 py-4 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center px-6">
          <a href="#" className="text-3xl font-extrabold text-red-600 hover:text-red-500 transition-colors duration-300">VELOCITY GYM</a>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-lg font-medium hover:text-red-500 transition-colors duration-300">Home</a>
            <a href="#about" className="text-lg font-medium hover:text-red-500 transition-colors duration-300">About</a>
            <a href="#services" className="text-lg font-medium hover:text-red-500 transition-colors duration-300">Services</a>
            <a href="#contact" className="text-lg font-medium hover:text-red-500 transition-colors duration-300">Contact</a>
          </div>
          <button className="md:hidden text-white text-2xl">
            {/* Hamburger Icon */}
            &#9776;
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: 'url("/images/hero-gym-bg.jpg")' }}>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 max-w-4xl px-6">
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-red-600 animate-pulse">
              UNLEASH YOUR POWER
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Transform your body, transform your life. Join Velocity Gym today.
            </p>
            <a href="#contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-center mb-12 text-red-600">About Velocity Gym</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  At Velocity Gym, we believe in pushing boundaries and breaking limits. Our state-of-the-art facility is designed to help you achieve your fitness goals, whether you're a beginner or a seasoned athlete.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  With expert trainers, cutting-edge equipment, and a supportive community, we're here to guide you every step of the way.
                </p>
              </div>
              <div className="bg-gray-700 h-80 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 text-xl">[Image Placeholder]</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-center mb-12 text-red-600">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="text-red-600 text-6xl mb-4">💪</div>
                <h3 className="text-2xl font-bold mb-4">Personal Training</h3>
                <p className="text-gray-300">
                  One-on-one sessions tailored to your fitness level and goals with certified trainers.
                </p>
              </div>
              {/* Service 2 */}
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="text-red-600 text-6xl mb-4">🏋️</div>
                <h3 className="text-2xl font-bold mb-4">Group Classes</h3>
                <p className="text-gray-300">
                  High-energy classes including HIIT, yoga, spin, and more to keep you motivated.
                </p>
              </div>
              {/* Service 3 */}
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="text-red-600 text-6xl mb-4">🥗</div>
                <h3 className="text-2xl font-bold mb-4">Nutrition Coaching</h3>
                <p className="text-gray-300">
                  Personalized meal plans and nutrition advice to complement your training.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-center mb-12 text-red-600">Get In Touch</h2>
            <form className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">© 2024 Velocity Gym. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
