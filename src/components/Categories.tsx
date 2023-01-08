import { productAPI } from "../features/product/productAPI";
import { ICategory } from "../models/ICategory";

interface Props {
  onClick: (id: string) => void
}

export const Categories = ({ onClick }: Props ) => {
  const { data: categories } = productAPI.useGetCategoriesQuery("");

  if (categories)
    return (
      <div>
        <ul className="catalog-categories nav justify-content-center">
          <li className="nav-item" onClick={() => onClick("")}>
            <span className="nav-link">Все</span>
          </li>
          {categories.map((category: ICategory) => (
            <li className="nav-item" key={category.id} onClick={() => onClick(category.id)}>
              <span className="nav-link">
                {category.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  else return <>Loading...</>;
};
