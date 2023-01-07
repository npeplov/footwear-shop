import { useGetAllProductsQuery } from "../features/product/productAPI";
import { IProduct } from "../modules/IProduct";
import { ProductCard } from "./ProductCard";
import { useState } from "react";
import { Categories } from "./Categories";

interface IUseQuery {
  useQuery: typeof useGetAllProductsQuery;
  offset?: string;
}

export const CatalogComponent: React.FC<IUseQuery> = ({ useQuery }) => {
  const [offset, setOffset] = useState("0");

  const { data: products } = useQuery(offset);
  const handleLoadMore = () => {
    setOffset(`${Number(offset) + 6}`);
  };

  console.log(products);

  if (products)
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Categories />
            <section className="catalog">
              <div className="row">
                {products &&
                  products.map((product: IProduct) => (
                    <ProductCard product={product} />
                  ))}
              </div>
            </section>
          </div>
        </div>
        <div className="my-3 text-center">
          <button
            className="btn btn-outline-primary"
            onClick={() => handleLoadMore()}
          >
            Загрузить еще
          </button>
        </div>
      </div>
    );
  else
    return (
      <>
        {/* <div className="preloader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div> */}
      </>
    );
};
