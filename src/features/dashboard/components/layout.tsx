import { Box, Home, LogOut, Receipt, Users } from 'lucide-react';
import { Menu } from './layout.menu';
import { Button } from '../../../components/ui/button';

interface LayoutProps {
  children: React.ReactNode;
  isCentered?: boolean;
}

export const LayoutDashboard = (props: LayoutProps) => {
  return (
    <div className="flex h-screen">
      <aside className="flex w-[240px] flex-col justify-between border-r border-slate-100 bg-gradient-to-b from-primary-50 to-rose-50 p-6">
        <section>
          <div className="mb-4 px-3 py-2 text-sm font-bold">Digicommerce.</div>
          <Menu label="Dashboard" href="/dashboard" icon={<Home size={18} />} />
          <Menu label="Products" href="/dashboard/products" icon={<Box size={18} />} />
          <Menu label="Orders" href="/dashboard/orders" icon={<Receipt size={18} />} />
          <Menu label="Customers" href="/dashboard/customers" icon={<Users size={18} />} />
        </section>
        <div>
          <Button variant="secondary" startContent={<LogOut size={18} />}>
            Logout
          </Button>
        </div>
      </aside>
      {props.isCentered ? (
        <main className="w-[calc(100vw-240px)] p-6">
          <div className="m-auto max-w-2xl">{props.children}</div>
        </main>
      ) : (
        <main className="w-[calc(100vw-240px)] p-6">{props.children}</main>
      )}
    </div>
  );
};
