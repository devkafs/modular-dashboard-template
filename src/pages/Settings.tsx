
import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/components/theme-provider';
import { 
  Sun, 
  Moon, 
  LayoutDashboard, 
  LayoutPanelTop,
  Monitor,
  Palette,
  Bell,
  Languages,
  Timer,
  MousePointer2
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

const Settings = () => {
  const [navType, setNavType] = useState<'sidebar' | 'headerbar'>('sidebar');
  const { theme, setTheme } = useTheme();
  const [animations, setAnimations] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(true);
  const [language, setLanguage] = useState('english');

  return (
    <MainLayout navType={navType} onChangeNav={setNavType}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground mt-2">
            Manage your application preferences and configurations.
          </p>
        </div>

        <div className="grid gap-6">
          {/* Appearance Section */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Appearance</h2>
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
                      Choose between sidebar or header navigation layout
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

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {theme === 'dark' ? (
                    <Moon className="h-5 w-5" />
                  ) : (
                    <Sun className="h-5 w-5" />
                  )}
                  <div className="space-y-1">
                    <Label htmlFor="theme">Theme Preference</Label>
                    <p className="text-sm text-muted-foreground">
                      Select your preferred color theme
                    </p>
                  </div>
                </div>
                <RadioGroup 
                  defaultValue={theme} 
                  onValueChange={(value) => setTheme(value as 'light' | 'dark' | 'system')}
                  className="flex space-x-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="light" id="light" />
                    <Label htmlFor="light">Light</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dark" id="dark" />
                    <Label htmlFor="dark">Dark</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="system" id="system" />
                    <Label htmlFor="system">System</Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <MousePointer2 className="h-5 w-5" />
                  <div className="space-y-1">
                    <Label htmlFor="animations">Interface Animations</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable smooth transitions and animations
                    </p>
                  </div>
                </div>
                <Switch 
                  id="animations"
                  checked={animations}
                  onCheckedChange={setAnimations}
                />
              </div>
            </div>
          </Card>

          {/* Preferences Section */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Preferences</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Bell className="h-5 w-5" />
                  <div className="space-y-1">
                    <Label htmlFor="notifications">Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive important updates and alerts
                    </p>
                  </div>
                </div>
                <Switch 
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Timer className="h-5 w-5" />
                  <div className="space-y-1">
                    <Label htmlFor="autosave">Auto-save</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically save changes as you work
                    </p>
                  </div>
                </div>
                <Switch 
                  id="autosave"
                  checked={autoSave}
                  onCheckedChange={setAutoSave}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Languages className="h-5 w-5" />
                  <div className="space-y-1">
                    <Label>Language</Label>
                    <p className="text-sm text-muted-foreground">
                      Select your preferred language
                    </p>
                  </div>
                </div>
                <RadioGroup 
                  defaultValue={language} 
                  onValueChange={setLanguage}
                  className="flex space-x-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="english" id="english" />
                    <Label htmlFor="english">English</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="indonesia" id="indonesia" />
                    <Label htmlFor="indonesia">Indonesia</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Settings;

