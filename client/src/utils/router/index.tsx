import Layout from '@/components/layout';
import { Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="products" element={<>Products</>} />
        <Route path="recipes" element={<>Recipes</>} />
      </Route>
    </Routes>
  );
};

export default Router;
