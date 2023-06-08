import { Link } from "react-router-dom";
import React from "react";

export default function Register({ registerUser }) {
  const [setFormValue, formValue] = React.useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    registerUser(formValue);
  }

  function handleChange(e) {
    const input = e.target;
    setFormValue({
      ...formValue,
      [input.name]: input.value,
    });
  }

  return (
    <div className="sign">
      <p className="sign__header">Регистрация</p>
      <form onSubmit={handleSubmit} name="register" className="sign__form">
        <input
          name="email"
          className="input"
          type="email"
          value={formValue.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          name="password"
          className="input"
          type="password"
          value={formValue.password}
          onChange={handleChange}
          placeholder="Пароль"
          required
        />
        <button type="submit" className="sign__link">
          Зарегистрироваться
        </button>
      </form>
      <Link to="/sign-in" className="sign__register">
        Уже зарегистрированы? Войти
      </Link>
    </div>
  );
}
