import { CatalogComponent } from "../components/CatalogComponent";
import { productAPI } from "../features/product/productAPI";

export const Catalog: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <section className="catalog">
            <div className="row">
              <h1>Каталог</h1>
              <CatalogComponent
                useQuery={productAPI.useGetOffsetProductsQuery}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
