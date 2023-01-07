import { NavLink } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

export const Header = () => {
  const { cart } = useAppSelector((state) => state.cart);
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-md bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="\">
                ЛогоМагаза
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Главная
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/catalog">
                      Каталог
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      О магазине
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contacts">
                      Контакты
                    </NavLink>
                  </li>
                  <li className="nav-item"></li>
                </ul>
                <div className="d-flex">
                  <NavLink className="nav-link position-relative" to="/cart">
                    Корзина
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cart.length ? cart.length : null}
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
