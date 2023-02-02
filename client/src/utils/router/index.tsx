import Layout from '@/components/layout';
import { Routes, Route } from 'react-router-dom';
import SignInPage from '@/pages/SignIn';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="products" element={<>Products</>} />
        <Route path="recipes" element={<>Recipes</>} />
      </Route>
      <Route path="/auth/sign-in" element={<SignInPage />} />
    </Routes>
  );
};

export default Router;
