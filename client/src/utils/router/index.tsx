import { Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<div>home</div>} />
    </Routes>
  );
};

export default Router;
