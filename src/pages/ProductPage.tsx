import { useParams } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { productAPI } from "../features/product/productAPI";
import { useState } from "react";
import { addproduct } from "../features/cart/cartSlice";
import { IProduct } from "../models/IProduct";
import Button from "react-bootstrap/esm/Button";

export const ProductPage = () => {
  const { id } = useParams();
  const { data: product } = productAPI.useGetProductItemQuery(id);
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const [sizeSelected, setSizeSelected] = useState("");

  const addToCart = (product: IProduct) => {
    dispatch(
      addproduct({
        id: product.id,
        title: product.title,
        size: sizeSelected,
        quantity,
        price: product.price,
      })
    );
  };
  const handleSizeSelect = (size: string) => {
    setSizeSelected(size);
  };

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
            <div className="row">
              <div className="col">Размеры в наличии:</div>
              <div className="pagination col">
                {product.sizes.map((size, ind) =>
                  size.avalible ? (
                    <span
                      onClick={() => handleSizeSelect(size.size)}
                      key={ind}
                      className={
                        sizeSelected === size.size
                          ? "page-link active"
                          : "page-link"
                      }
                    >
                      {size.size}
                    </span>
                  ) : (
                    <div className="page-item" key={size.size}>
                      <span className=" page-link diabled" key={size.size}>
                        {size.size}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
            <div>
              Количество:
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <Button
                  onClick={() => setQuantity((prev) => prev - 1)}
                  variant="btn btn-secondary"
                >
                  ─
                </Button>
                <span className="btn btn-outline-primary">{quantity}</span>
                <Button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  variant="btn btn-secondary"
                >
                  +
                </Button>
              </div>
            </div>
            <div>{product.price * quantity} ₽</div>
            <div className="d-grid gap-2">
              <Button
                variant={
                  sizeSelected ? "btn btn-danger " : "btn btn-danger disabled"
                }
                onClick={() => addToCart(product)}
              >
                В корзину
              </Button>
            </div>
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
