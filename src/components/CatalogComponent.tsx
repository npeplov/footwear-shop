import { useGetAllProductsQuery } from "../features/product/productAPI";
import { IProduct } from "../modules/IProduct";

interface IUseQuery {
  useQuery: typeof useGetAllProductsQuery;
}

export const CatalogComponent: React.FC<IUseQuery> = ({ useQuery }) => {
  const { data: products } = useQuery("");

  if (products)
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <section className="catalog">
              <div className="row">
                {products &&
                  products.map((product: IProduct) => (
                    <div className="col-4" key={product.id}>
                      <div className="card h-100 flex-row align-content-between flex-wrap">
                        <a href={`products/${product.id}`}>
                        <img
                          className="img-fluid card-img-top"
                          src={product.images[0]}
                          alt=""
                        />
                        </a>
                        <div className="card-body">
                          <p className="card-text">{product.title}</p>
                          <p className="card-text">{product.price} ₽</p>
                          <a href="/" className="btn btn-outline-primary">
                            Заказать
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  else return <>Loading...</>;
};
