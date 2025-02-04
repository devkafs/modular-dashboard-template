
import MainLayout from '../layouts/MainLayout';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

const Settings = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Pengaturan</h1>
          <p className="text-muted-foreground mt-2">
            Konfigurasi tampilan dan preferensi aplikasi
          </p>
        </div>

        <Card className="p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="notifications">Notifikasi</Label>
                <p className="text-sm text-muted-foreground">
                  Aktifkan notifikasi untuk mendapatkan pembaruan penting
                </p>
              </div>
              <Switch id="notifications" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="analytics">Analytics</Label>
                <p className="text-sm text-muted-foreground">
                  Bantu kami meningkatkan aplikasi dengan mengirim data penggunaan
                </p>
              </div>
              <Switch id="analytics" />
            </div>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Settings;
