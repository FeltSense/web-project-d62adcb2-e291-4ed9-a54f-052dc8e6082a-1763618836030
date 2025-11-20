import Link from 'next/link';

const Navigation = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Classes', href: '/classes' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-500 hover:text-red-400 transition duration-300 ease-in-out">
          Velocity Gym
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-lg hover:text-red-500 transition duration-300 ease-in-out">
              {link.name}
            </Link>
          ))}
          <Link href="/join" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Join Now
          </Link>
        </div>
        {/* Mobile menu icon - simplified for this output, full implementation would involve state */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;