import { IProduct } from "../models/IProduct";
import { ProductCard } from "./ProductCard";
import { productAPI } from "../features/product/productAPI";

export const HitOfSales = () => {
  const { data: products } = productAPI.useGetTopSalesQuery("");

  if (products)
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <section className="hitofsales">
              <div className="row">
                {products &&
                  products.map((product: IProduct) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </section>
          </div>
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
