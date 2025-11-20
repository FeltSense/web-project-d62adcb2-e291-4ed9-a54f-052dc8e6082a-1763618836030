'use client';

import React, { useState, FormEvent } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = e.currentTarget as HTMLFormElement;
    const formDataObj = new FormData(form);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formDataObj.get('name'),
          email: formDataObj.get('email'),
          phone: formDataObj.get('phone')
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header/Navbar */}
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
            &#9776;
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-gray-900 via-red-900 to-black">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 px-6">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-lg">
              UNLEASH YOUR <span className="text-red-600">POTENTIAL</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Transform Your Body, Transform Your Life
            </p>
            <a href="#contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-red-600">About Velocity Gym</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  At Velocity Gym, we believe fitness is more than just lifting weights—it's a lifestyle. Our state-of-the-art facility and expert trainers are dedicated to helping you achieve your fitness goals, whether you're a beginner or a seasoned athlete.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  With cutting-edge equipment, personalized training programs, and a supportive community, we're here to push you beyond your limits and help you become the best version of yourself.
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-lg shadow-2xl">
                <h3 className="text-3xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center">
                    <span className="text-red-300 mr-3">✓</span>
                    Professional Certified Trainers
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-300 mr-3">✓</span>
                    Modern Equipment & Facilities
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-300 mr-3">✓</span>
                    Flexible Membership Plans
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-300 mr-3">✓</span>
                    Nutritional Guidance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-red-600">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-red-600 text-5xl mb-4">💪</div>
                <h3 className="text-2xl font-bold mb-4">Personal Training</h3>
                <p className="text-gray-400">
                  One-on-one sessions with certified trainers tailored to your specific goals and fitness level.
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-red-600 text-5xl mb-4">🏋️</div>
                <h3 className="text-2xl font-bold mb-4">Group Classes</h3>
                <p className="text-gray-400">
                  High-energy group workouts including HIIT, yoga, spinning, and more.
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-red-600 text-5xl mb-4">🥗</div>
                <h3 className="text-2xl font-bold mb-4">Nutrition Plans</h3>
                <p className="text-gray-400">
                  Customized meal plans and nutritional counseling to complement your training.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-red-600">Membership Plans</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-8 rounded-lg shadow-xl border-2 border-gray-700 hover:border-red-600 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Basic</h3>
                <p className="text-4xl font-bold text-red-600 mb-6">$29<span className="text-lg text-gray-400">/month</span></p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-red-600 mr-3">✓</span>
                    Gym Access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-red-600 mr-3">✓</span>
                    Locker Room
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-red-600 mr-3">✓</span>
                    Basic Equipment
                  </li>
                </ul>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                  Get Started
                </button>
              </div>
              <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-lg shadow-2xl transform scale-105 border-4 border-red-500">
                <div className="bg-yellow-400 text-gray-900 text-xs font-bold py-1 px-3 rounded-full inline-block mb-4">MOST POPULAR</div>
                <h3 className="text-2xl font-bold mb-4">Premium</h3>
                <p className="text-4xl font-bold mb-6">$59<span className="text-lg">/month</span></p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-red-200 mr-3">✓</span>
                    All Basic Features
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-200 mr-3">✓</span>
                    Group Classes
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-200 mr-3">✓</span>
                    Nutrition Guidance
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-200 mr-3">✓</span>
                    Guest Passes
                  </li>
                </ul>
                <button className="w-full bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                  Get Started
                </button>
              </div>
              <div className="bg-gray-900 p-8 rounded-lg shadow-xl border-2 border-gray-700 hover:border-red-600 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Elite</h3>
                <p className="text-4xl font-bold text-red-600 mb-6">$99<span className="text-lg text-gray-400">/month</span></p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-red-600 mr-3">✓</span>
                    All Premium Features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-red-600 mr-3">✓</span>
                    Personal Training
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-red-600 mr-3">✓</span>
                    Priority Booking
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-red-600 mr-3">✓</span>
                    Custom Meal Plans
                  </li>
                </ul>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-red-600">Get In Touch</h2>
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-xl">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-lg font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <p className="mt-4 text-green-500 text-center">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="mt-4 text-red-500 text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">&copy; 2024 Velocity Gym. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}