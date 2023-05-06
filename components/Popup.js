export class Popup {

  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseButton = this._popupElement.querySelector('.popup__close-button');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  //закрытие-открытие попапов
  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }
  // закрытие popup на esc
  _handleEscClose(evt) {
    if (evt.key === 'Escape')  {
      this.close();
    };
  }

  // закрытие popup на оверлей
  _handleOverlayClose() {

    this._popupElement.addEventListener('mousedown', (evt) => { // на каждый попап устанавливаем слушателя события
      const targetClassList = evt.target.classList; // запишем в переменную класс элемента, на котором произошло событие
      if (targetClassList.contains('popup')) { // проверяем наличие класса попапа
        this.close(); // если один из классов присутствует, то закрываем попап
      }
    })

  }

  setEventListeners() {

    this._popupCloseButton.addEventListener('click', (evt) => {
      this.close();
    })

    this._handleOverlayClose();
  }
}