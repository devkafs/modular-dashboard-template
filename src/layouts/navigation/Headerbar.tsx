
import { Menu, Home, Settings, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderbarProps {
  onChangeNav: () => void;
}

const Headerbar = ({ onChangeNav }: HeaderbarProps) => {
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
                  <span className="ml-2">Beranda</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className="flex items-center px-3 py-2 hover:bg-accent rounded-md transition-colors"
                >
                  <Settings size={18} />
                  <span className="ml-2">Pengaturan</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <button
          onClick={onChangeNav}
          className="flex items-center p-2 hover:bg-accent rounded-md transition-colors"
        >
          <ChevronDown size={20} />
          <span className="ml-2">Ganti ke Sidebar</span>
        </button>
      </div>
    </header>
  );
};

export default Headerbar;
