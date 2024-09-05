import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './layouts/home-page/homePage';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Layout from './layouts/Layout';
import Introduction from './layouts/introduction/introduction';
import Products from './layouts/products/products';
import Process from './layouts/process/process';
import ProductPage from './components/productPage';

const productData = {
  1: {
    title: "San pham 1",
    description: "Mô tả của sản phẩm 1",
    imageUrl: "/images/san-pham-1.jpg"
  },
  2: {
    title: "San pham 2",
    description: "Mô tả của sản phẩm 2",
    imageUrl: "/images/san-pham-2.jpg"
  },
  3: {
    title: "San pham 3",
    description: "Mô tả của sản phẩm 3",
    imageUrl: "/images/san-pham-3.jpg"
  },
  other: {
    title: "San pham khac",
    description: "Mô tả của các sản phẩm khác",
    imageUrl: "/images/san-pham-khac.jpg"
  }
};

function ProductWrapper() {
  const { productId } = useParams();
  console.log("Product ID:", productId);
  const product = productData[productId] || productData.other;

  return <ProductPage {...product} />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="gioithieu" element={<Introduction />} />
          <Route path="process" element={<Process />} />
          <Route path="products" element={
            <ProductPage
              title="Tất cả sản phẩm"
              description="Danh sách tất cả các sản phẩm"
              imageUrl="/images/tat-ca-san-pham.jpg"
            />
          } />
          <Route path="products/:productId" element={<ProductWrapper />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
