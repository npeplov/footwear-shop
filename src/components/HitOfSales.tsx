import { useGetAllProductsQuery } from "../features/product/productAPI";
import { IProduct } from "../modules/IProduct";
import { ProductCard } from "./ProductCard";

interface IUseQuery {
  useQuery: typeof useGetAllProductsQuery;
  offset?: string;
}

export const HitOfSales: React.FC<IUseQuery> = ({ useQuery }) => {
  const { data: products } = useQuery("");

  if (products)
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <section className="hitofsales">
              <div className="row">
                {products &&
                  products.map((product: IProduct) => (
                    <ProductCard product = {product}/>
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
        {/* <div className="preloader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div> */}
      </>
    );
};
