
import { useState } from 'react';
import Sidebar from './navigation/Sidebar';
import Headerbar from './navigation/Headerbar';

type NavigationType = 'sidebar' | 'headerbar';

interface MainLayoutProps {
  children: React.ReactNode;
  navType?: NavigationType;
  onChangeNav?: (type: NavigationType) => void;
}

const MainLayout = ({ children, navType = 'sidebar', onChangeNav }: MainLayoutProps) => {
  const [localNavType, setLocalNavType] = useState<NavigationType>(navType);
  
  const handleNavChange = (type: NavigationType) => {
    setLocalNavType(type);
    onChangeNav?.(type);
  };

  return (
    <div className="min-h-screen flex">
      {localNavType === 'sidebar' ? (
        <>
          <Sidebar />
          <main className="flex-1 p-6">{children}</main>
        </>
      ) : (
        <div className="flex flex-col w-full">
          <Headerbar />
          <main className="flex-1 p-6">{children}</main>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
