import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { Layout } from "./components/Layout";
import { Routes } from "react-router-dom";
import { Route } from "react-router";
import { Catalog } from "./pages/Catalog";
import { Cart } from "./pages/Cart";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { HomePage } from "./pages/HomePage";
import { Page404 } from "./pages/Page404";
import { ProductPage } from "./pages/ProductPage";

// иконка корзины file:///C:/react/test/ra16-diploma-master/html/img/header-controls-sprite.png
// в футере ссылки
// форма заказа в корзине
// бейдж ci\cd

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="products/:id" element={<ProductPage/>}/>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
