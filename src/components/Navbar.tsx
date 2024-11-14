import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Home, Info, Phone, LogIn } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex space-x-8">
            <Link to="/" className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200">
              <Info size={20} />
              <span>About Us</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200">
              <Phone size={20} />
              <span>Contact</span>
            </Link>
          </div>
          <div>
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-xl border border-gray-700
                  hover:text-red-400 transition-all duration-200"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 
                  hover:from-blue-600 hover:to-purple-600 px-4 py-2 rounded-xl transition-all duration-200"
              >
                <LogIn size={20} />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;