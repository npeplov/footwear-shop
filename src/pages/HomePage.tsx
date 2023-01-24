import { CatalogComponent } from "../components/CatalogComponent";
import { HitOfSales } from "../components/HitOfSales";


export const HomePage = () => {
    return (
        <div className="row">
          <div className="col">
            <h2>Хиты продаж</h2>
            <HitOfSales/>
            <h2>Каталог</h2>
            <CatalogComponent/>
          </div>
        </div>
    );
};
