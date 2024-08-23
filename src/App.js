import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './layouts/home-page/homePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layouts/Layout';
import Introduction from './layouts/introduction/introduction';
import Products from './layouts/products/products';
import Process from './layouts/process/process';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="gioithieu" element={<Introduction />} />
          <Route path="products" element={<Products />} />
          <Route path='process' element={<Process />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
