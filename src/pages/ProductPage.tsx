import { useParams } from "react-router-dom";
import { useGetProductItemQuery } from "../features/product/productAPI";

export const ProductPage = ({ ...props }) => {
  const { id } = useParams();
  const { data: product } = useGetProductItemQuery(id);

  if (product)
    return (
      <div className="row">
        <div className="col-5">
          {product.images.map((imgUrl) => (
            <img
              key={imgUrl}
              src={imgUrl}
              alt={product.title}
              className="img-fluid card-img-top"
            />
          ))}
        </div>
        <div className="col-7">
          <h1>{product.title}</h1>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Артикул</td>
                <td>{product.sku}</td>
              </tr>
              <tr>
                <td>Производитель</td>
                <td>{product.manufacturer}</td>
              </tr>
              <tr>
                <td>Цвет</td>
                <td>{product.color}</td>
              </tr>
              <tr>
                <td>Материалы</td>
                <td>{product.material}</td>
              </tr>
              <tr>
                <td>Сезон</td>
                <td>{product.season}</td>
              </tr>
              <tr>
                <td>Повод</td>
                <td>{product.reason}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <p>
              Размеры в наличии:
              {product.sizes.map((size) => (
                <span key={size.size} className="catalog-item-size">
                  {size.size}
                </span>
              ))}
            </p>
            <p>
              Количество:
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button className="btn btn-secondary">─</button>
                <span className="btn btn-outline-primary">1</span>
                <button className="btn btn-secondary">+</button>
              </div>
            </p>
            <div className="d-grid gap-2">
              <button className="btn btn-danger">В корзину</button>
            </div>
          </div>
        </div>
      </div>
    );
  else return <>Error</>;
};
