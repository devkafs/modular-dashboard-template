
import { Menu, X, Home, Settings, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  onChangeNav: () => void;
}

const Sidebar = ({ onChangeNav }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`${
        collapsed ? 'w-16' : 'w-64'
      } h-screen transition-all duration-300 ease-in-out bg-card border-r border-border`}
    >
      <div className="flex items-center justify-between p-4 border-b border-border">
        {!collapsed && <h1 className="text-xl font-semibold">Dashboard</h1>}
        <button onClick={() => setCollapsed(!collapsed)} className="p-2 hover:bg-accent rounded-md">
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </button>
      </div>
      
      <nav className="p-2">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center p-2 hover:bg-accent rounded-md transition-colors"
            >
              <Home size={20} />
              {!collapsed && <span className="ml-3">Beranda</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="flex items-center p-2 hover:bg-accent rounded-md transition-colors"
            >
              <Settings size={20} />
              {!collapsed && <span className="ml-3">Pengaturan</span>}
            </Link>
          </li>
        </ul>
      </nav>

      <div className="absolute bottom-4 w-full px-4">
        <button
          onClick={onChangeNav}
          className="w-full flex items-center justify-center p-2 hover:bg-accent rounded-md transition-colors"
        >
          <ChevronLeft size={20} />
          {!collapsed && <span className="ml-2">Ganti ke Headerbar</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
