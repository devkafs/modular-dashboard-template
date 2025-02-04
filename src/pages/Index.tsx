
import MainLayout from '../layouts/MainLayout';
import { Card } from '@/components/ui/card';

const Index = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Welcome</h1>
          <p className="text-muted-foreground mt-2">
            Modular dashboard template with flexible navigation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Flexible Navigation</h3>
            <p className="text-muted-foreground">
              Choose between Sidebar or Header navigation based on your preference
            </p>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Responsive</h3>
            <p className="text-muted-foreground">
              Optimal display across various screen sizes
            </p>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Modular</h3>
            <p className="text-muted-foreground">
              Clean code structure that's easy to maintain and expand
            </p>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
