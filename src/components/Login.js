import React from "react";

export default function Login({ loginUser }) {
  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    loginUser(formValue);
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
      <p className="sign__header">Вход</p>
      <form onSubmit={handleSubmit} name="login" className="sign__form">
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
          Войти
        </button>
      </form>
    </div>
  );
}
