import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '../features/dashboard/components';
import { DashboardProducts } from '../features/dashboard-products/components';
import { FormCreateproduct } from '../features/dashboard-products/components/form.create-product';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/products" element={<DashboardProducts />} />
        <Route path="/dashboard/products/create" element={<FormCreateproduct />} />
      </Routes>
    </BrowserRouter>
  );
};
