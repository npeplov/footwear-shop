import { useAppSelector } from "../app/hooks";

export const Cart = () => {
  // 1. получить остальные поля из query или записать их в стор на странице товара
  // 2. при обновлении страницы очищается. нужен локал сторадж
  const {cart} = useAppSelector(state=>state.cart)
  console.log(cart);
  
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
            {cart.map(item=>
            <tr>
              <td>{item.id}</td>
              <td></td>
              <td>{item.size}</td>
              <td>{item.quantity}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
