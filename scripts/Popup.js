export class Popup {

  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  }

  //закрытие-открытие попапов
  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose());
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose());
  }
  // закрытие popup на esc
  _handleEscClose() {
    this._popupSelector.addEventListener('keydown', (evt) => { 
    if (evt.key === 'Escape') {
      this.close();
    };
  });
  }

  // закрытие popup на оверлей
  _handleOverlayClose() {

    this._popupSelector.addEventListener('mousedown', (evt) => { // на каждый попап устанавливаем слушателя события
      const targetClassList = evt.target.classList; // запишем в переменную класс элемента, на котором произошло событие
      if (targetClassList.contains('popup')) { // проверяем наличие класса попапа
        this.close(); // если один из классов присутствует, то закрываем попап
      }
    })

  }

  setEventListeners() {
    this._handleEscClose();
    this._handleOverlayClose();
  }
}