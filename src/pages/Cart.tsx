import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../app/hooks";
import { removeproduct } from "../features/cart/cartSlice";

export const Cart = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (id: number) => {
    dispatch(removeproduct(id));
  };

  return (
    <div className="row">
      <div className="col">
        <h1>Корзина</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Название</th>
              <th>Размер</th>
              <th>Кол-во</th>
              <th>Стоимость</th>
              <th>Итого</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.size}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.price * item.quantity}</td>
                <td>
                  <Button
                    variant="btn btn-outline-danger"
                    onClick={() => handleRemove(item.id)}
                  >
                    Удалить
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={5} className="text-end">
                Итого
              </td>
              <td>{cart.reduce((sum, item)=> sum + item.price * item.quantity, 0)}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
