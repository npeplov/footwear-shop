import { productAPI } from "../features/product/productAPI";
import { IProduct } from "../models/IProduct";
import { ProductCard } from "./ProductCard";
import { useState } from "react";
import { Categories } from "./Categories";

export const CatalogComponent: React.FC = () => {
  const [offset, setOffset] = useState("0");
  const [categoryId, setCategoryId]=useState("")
  const { data: products } = productAPI.useGetProductsQuery({categoryId, offset})
  const handleLoadMore = () => {
    setOffset(`${Number(offset) + 6}`);
  };

  const handleCategoryClick = (response: string) => {
    setCategoryId(response);
    setOffset("0")
  }

  if (products)
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Categories onClick={handleCategoryClick} />
            <section className="catalog">
              <div className="row">
                {products &&
                  products.map((product: IProduct) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </section>
          </div>
        </div>
        <div className="my-3 text-center">
          {products.length === 6 ? 
          <button
            className="btn btn-outline-primary"
            onClick={() => handleLoadMore()}
          >
            Загрузить еще
          </button>
          : null}
        </div>
      </div>
    );
  else
    return (
      <>
        <div className="preloader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </>
    );
};
