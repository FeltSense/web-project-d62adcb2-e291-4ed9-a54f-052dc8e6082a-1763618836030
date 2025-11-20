const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-3xl font-bold text-white mb-2">Velocity Gym</h3>
          <p className="text-sm text-gray-400 text-center md:text-left">
            Unleash your potential. Achieve greatness.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors duration-200">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Services</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.812c-3.267 0-4.188 1.947-4.188 4.004v2.996z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.791-1.574 2.161-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.494 2.902-6.494 6.492 0 .509.057 1.009.166 1.487-5.418-.271-10.233-2.866-13.447-6.848-.56.96-.88 2.072-.88 3.242 0 2.254 1.144 4.249 2.871 5.421-1.06-.033-2.067-.325-2.944-.807v.08c0 3.149 2.239 5.77 5.194 6.362-.544.148-1.119.227-1.706.227-.418 0-.823-.041-1.22-.116.825 2.574 3.201 4.457 6.009 4.509-2.224 1.748-5.029 2.793-8.09 2.793-.523 0-1.04-.03-1.549-.09 2.871 1.849 6.29 2.934 9.931 2.934 11.91 0 18.35-9.851 18.35-18.35 0-.28-.008-.559-.02-.838.79-.57 1.479-1.284 2.035-2.09z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.205 0-3.584-.012-4.849-.069-3.225-.148-4.771-1.664-4.919-4.919-.058-1.265-.069-1.644-.069-4.849 0-3.204.012-3.584.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.267-.058 1.644-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Velocity Gym. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
