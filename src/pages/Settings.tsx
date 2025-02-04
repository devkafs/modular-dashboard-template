
import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';
import { Sun, Moon, LayoutDashboard, LayoutPanelTop } from 'lucide-react';

const Settings = () => {
  const [navType, setNavType] = useState<'sidebar' | 'headerbar'>('sidebar');
  const { theme, setTheme } = useTheme();

  return (
    <MainLayout navType={navType} onChangeNav={setNavType}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-2">
            Configure application display and preferences
          </p>
        </div>

        <Card className="p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {navType === 'sidebar' ? (
                  <LayoutDashboard className="h-5 w-5" />
                ) : (
                  <LayoutPanelTop className="h-5 w-5" />
                )}
                <div className="space-y-1">
                  <Label htmlFor="navigation">Navigation Style</Label>
                  <p className="text-sm text-muted-foreground">
                    Choose between sidebar or header navigation
                  </p>
                </div>
              </div>
              <Switch 
                id="navigation"
                checked={navType === 'headerbar'}
                onCheckedChange={(checked) => 
                  setNavType(checked ? 'headerbar' : 'sidebar')
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {theme === 'dark' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
                <div className="space-y-1">
                  <Label htmlFor="theme">Theme Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Switch between dark and light mode
                  </p>
                </div>
              </div>
              <Switch 
                id="theme"
                checked={theme === 'dark'}
                onCheckedChange={(checked) => 
                  setTheme(checked ? 'dark' : 'light')
                }
              />
            </div>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Settings;
