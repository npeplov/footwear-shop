import { NavLink } from "react-router-dom";
import { productAPI } from "../features/product/productAPI";
import { ICategory } from "../modules/ICategory";

export const Categories = () => {
  const { data: categories } = productAPI.useGetCategoriesQuery("");

  return (
    <div>
      <ul className="catalog-categories nav justify-content-center">
        {categories.map((category: ICategory) => (
          <li className="nav-item">
            <NavLink to={``} className="nav-link">
              {category.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
