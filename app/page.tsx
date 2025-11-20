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
        <section id="home" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: 'url("/images/hero-gym-bg.jpg