
import MainLayout from '../layouts/MainLayout';
import { Card } from '@/components/ui/card';

const Index = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Selamat Datang</h1>
          <p className="text-muted-foreground mt-2">
            Template dashboard modular dengan navigasi fleksibel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Navigasi Fleksibel</h3>
            <p className="text-muted-foreground">
              Pilih antara Sidebar atau Headerbar sesuai preferensi Anda
            </p>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Responsif</h3>
            <p className="text-muted-foreground">
              Tampilan yang optimal di berbagai ukuran layar
            </p>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Modular</h3>
            <p className="text-muted-foreground">
              Struktur kode yang rapi dan mudah dikembangkan
            </p>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
