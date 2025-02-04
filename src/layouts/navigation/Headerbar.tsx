
import { Menu, Home, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Headerbar = () => {
  return (
    <header className="w-full h-16 bg-card border-b border-border">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/"
                  className="flex items-center px-3 py-2 hover:bg-accent rounded-md transition-colors"
                >
                  <Home size={18} />
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className="flex items-center px-3 py-2 hover:bg-accent rounded-md transition-colors"
                >
                  <Settings size={18} />
                  <span className="ml-2">Settings</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Headerbar;
