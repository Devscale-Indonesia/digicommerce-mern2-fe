import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { LayoutDashboard } from '../../dashboard/components/layout';

export const DashboardProducts = () => {
  return (
    <LayoutDashboard>
      <main>
        <section className="flex items-end justify-between">
          <div>
            <h3>Products</h3>
            <p>Here is all of your products</p>
          </div>
          <Link to="/dashboard/products/create">
            <Button>Create Product</Button>
          </Link>
        </section>
      </main>
    </LayoutDashboard>
  );
};
