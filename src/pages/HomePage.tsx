import { Banner } from "../components/Banner";
import { productAPI } from "../features/product/productAPI";
import { CatalogComponent } from "../components/CatalogComponent";


export const HomePage = () => {
    return (
        <div className="row">
          <div className="col">
            <Banner />
            <h2>Хиты продаж</h2>
            <CatalogComponent useQuery={productAPI.useGetTopSalesQuery}/>
            <h2>Каталог</h2>
            <CatalogComponent useQuery={productAPI.useGetAllProductsQuery}/>
          </div>
        </div>
    );
};
