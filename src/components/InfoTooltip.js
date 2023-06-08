import success from "../images/success_icon.svg";
import fail from "../images/fail_icon.svg";

export default function InfoTooltip({ isOpen, onClose, status }) {
  const statusImg = status ? success : fail;
  const statusText = status
    ? "Вы успешно зарегистрировались!"
    : "Что-то пошло не так! Попробуйте ещё раз.";

  return (
    <section className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container popup__container-tooltip">
        <button className="popup__close" type="button" onClick={onClose} />
        <section className="tooltip__section">
          <img className="tooltip__image" alt="Внимание" src={statusImg} />
          <p className="tooltip__text">{statusText}</p>
        </section>
      </div>
    </section>
  );
}
