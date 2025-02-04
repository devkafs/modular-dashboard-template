
import { useState } from 'react';
import Sidebar from './navigation/Sidebar';
import Headerbar from './navigation/Headerbar';

type NavigationType = 'sidebar' | 'headerbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [navType, setNavType] = useState<NavigationType>('sidebar');

  return (
    <div className="min-h-screen flex">
      {navType === 'sidebar' ? (
        <>
          <Sidebar onChangeNav={() => setNavType('headerbar')} />
          <main className="flex-1 p-6">{children}</main>
        </>
      ) : (
        <div className="flex flex-col w-full">
          <Headerbar onChangeNav={() => setNavType('sidebar')} />
          <main className="flex-1 p-6">{children}</main>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
