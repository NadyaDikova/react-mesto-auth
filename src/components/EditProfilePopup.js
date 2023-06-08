import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [description, setDescription] = React.useState(currentUser.about);

  React.useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [isOpen, currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name={"edit"}
      title={"Редактировать профиль"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
    >
      <input
        id="nameEdit-input"
        placeholder="Имя"
        className="popup__input popup__input-name"
        type="text"
        name="name"
        minLength="2"
        maxLength="40"
        onChange={handleNameChange}
        value={name}
        required
      />
      <span className="popup__error nameEdit-input-error"></span>
      <input
        id="jobEdit-input"
        placeholder="Профессия"
        className="popup__input popup__input-description"
        type="text"
        name="about"
        minLength="2"
        maxLength="200"
        onChange={handleDescriptionChange}
        value={description}
        required
      />
      <span className="popup__error jobEdit-input-error"></span>
    </PopupWithForm>
  );
}
