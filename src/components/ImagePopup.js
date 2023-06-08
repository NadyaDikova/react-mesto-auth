export default function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_picture ${card.link && "popup_opened"}`}>
      <div className="popup__container-picture">
        <div className="popup__figure">
          <button className="popup__close" type="button" onClick={onClose} />
          <img className="popup__img" src={card.link} alt={card.name} />
          <h3 className="popup__figure-caption">{card.name}</h3>
        </div>
      </div>
    </div>
  );
}
