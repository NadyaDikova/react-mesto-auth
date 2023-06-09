import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name, link });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm
      name={"add"}
      title={"Новое место"}
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Создать"
      onSubmit={handleSubmit}
    >
      <input
        id="nameAdd-input"
        className="popup__input popup__input-name"
        type="text"
        name="name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        onChange={handleNameChange}
        value={name ?? ""}
        required
      />
      <span className="popup__error nameAdd-input-error"></span>
      <input
        id="urlEdit-input"
        className="popup__input popup__input-description"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        onChange={handleLinkChange}
        value={link ?? ""}
        required
      />
      <span className="popup__error urlEdit-input-error"></span>
    </PopupWithForm>
  );
}
