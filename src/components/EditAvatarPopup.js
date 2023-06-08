import React from "react";
import PopupWithForm from "./PopupWithForm.js";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  React.useEffect(() => {
    if (isOpen) {
      avatarRef.current.value = "";
    }
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name={"avatar"}
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Обновить"
    >
      <input
        id="urlAvatar-input"
        className="popup__input popup__input-avatar"
        type="url"
        name="avatar"
        placeholder="Ссылка на картинку"
        ref={avatarRef}
        required
      />
      <span className="popup__error urlAvatar-input-error"></span>
    </PopupWithForm>
  );
}
