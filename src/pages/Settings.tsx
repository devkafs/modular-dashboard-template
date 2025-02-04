
import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

const Settings = () => {
  const [navType, setNavType] = useState<'sidebar' | 'headerbar'>('sidebar');

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
              <div className="space-y-1">
                <Label htmlFor="notifications">Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Enable notifications to receive important updates
                </p>
              </div>
              <Switch id="notifications" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="analytics">Analytics</Label>
                <p className="text-sm text-muted-foreground">
                  Help us improve the application by sending usage data
                </p>
              </div>
              <Switch id="analytics" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="navigation">Navigation Style</Label>
                <p className="text-sm text-muted-foreground">
                  Choose between sidebar or header navigation
                </p>
              </div>
              <Switch 
                id="navigation"
                checked={navType === 'headerbar'}
                onCheckedChange={(checked) => 
                  setNavType(checked ? 'headerbar' : 'sidebar')
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
