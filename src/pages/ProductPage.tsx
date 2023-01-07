import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useGetProductItemQuery } from "../features/product/productAPI";
import { useEffect, useState } from "react";
import { addproduct } from "../features/cart/cartSlice";

export const ProductPage = () => {
  const { id } = useParams();
  const { data: product } = useGetProductItemQuery(id);
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const [sizeSelected, setSizeSelected] = useState("");
  const { cart } = useAppSelector((state) => state.cart);

  const addToCart = () => {
    dispatch(addproduct({ quantity, id: Number(id), size: sizeSelected }));
  };
  const handleSizeSelect = (size: string) => {
    setSizeSelected(size);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

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
                {product.sizes.map((size) =>
                  size.avalible ? (
                    <span
                      onClick={() => handleSizeSelect(size.size)}
                      key={size.size}
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
                <button
                  onClick={() => setQuantity((prev) => prev - 1)}
                  className="btn btn-secondary"
                >
                  ─
                </button>
                <span className="btn btn-outline-primary">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="btn btn-secondary"
                >
                  +
                </button>
              </div>
            </div>
            <div>{product.price * quantity} ₽</div>
            <div className="d-grid gap-2">
              <button className="btn btn-danger" onClick={addToCart}>
                В корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  else return <>Error</>;
};
