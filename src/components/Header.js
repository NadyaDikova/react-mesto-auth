import logo from "../images/logo.svg";
import { Routes, Route, Link } from "react-router-dom";

export default function Header({ email, logOut }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />

      <Routes>
        <Route
          path="/sign-up"
          element={
            <Link to="/sign-in" className="header__user">
              Войти
            </Link>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Link to="/sign-up" className="header__user">
              Регистрация
            </Link>
          }
        />
        <Route
          path="/"
          element={
            <div className="header__sign">
              <p className="header__email">{email}</p>
              <Link to="/sign-up" className="header__log-out" onClick={logOut}>
                Выйти
              </Link>
            </div>
          }
        />
      </Routes>
    </header>
  );
}
