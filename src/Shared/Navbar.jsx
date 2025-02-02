import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Add your search logic here
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Wall Cap
        </Link>

        {/* Search Bar (Hidden on Small Screens) */}
        <form onSubmit={handleSearch} className="hidden md:flex bg-white text-black rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search captions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-1 outline-none w-64"
          />
          <button type="submit" className="px-4 bg-gray-300 hover:bg-gray-400">
            <FaSearch />
          </button>
        </form>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/categories" className="hover:text-gray-300">Categories</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/admin" className="hover:text-gray-300">Admin Panel</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 p-4">
          {/* Search Bar for Mobile */}
          <form onSubmit={handleSearch} className="bg-white text-black rounded-full flex items-center p-1 mb-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-1 outline-none flex-grow"
            />
            <button type="submit" className="px-4 bg-gray-300 hover:bg-gray-400">
              <FaSearch />
            </button>
          </form>

          <Link to="/" className="block py-2" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/categories" className="block py-2" onClick={() => setMenuOpen(false)}>Categories</Link>
          <Link to="/about" className="block py-2" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/admin" className="block py-2" onClick={() => setMenuOpen(false)}>Admin Panel</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
