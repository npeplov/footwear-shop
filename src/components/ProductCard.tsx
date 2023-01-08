import { NavLink } from "react-router-dom";
import { IProduct } from "../models/IProduct";

interface IProps {
  product: IProduct
}

export const ProductCard = ({product}: IProps) => {
  return (
    <div className="col-4">
      <div className="card h-100 flex-row align-content-between flex-wrap">
        <NavLink to={`/products/${product.id}`}>
          <img
            className="img-fluid card-img-top"
            src={product.images[0]}
            alt=""
          />
        </NavLink>
        <div className="card-body">
          <p className="card-text">{product.title}</p>
          <p className="card-text">{product.price} ₽</p>
          <NavLink
            to={`/products/${product.id}`}
            className="btn btn-outline-primary"
          >
            Заказать
          </NavLink>
        </div>
      </div>
    </div>
  );
};
