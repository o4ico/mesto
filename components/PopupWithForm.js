import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
  
  constructor({ handleFormSubmit }, popupSelector, formSelector, inputSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popup = document.querySelector(popupSelector);
    this._form = this._popup.querySelector(formSelector);
    this._inputList = Array.from(this._form.querySelectorAll(inputSelector));// достаём все элементы полей
    this._popupSubmitButton = this._popup.querySelector('.popup__submit-button');
    this._activeSubmitButtonText = this._popupSubmitButton.value;
    this._disabledSubmitButtonText = this._popupSubmitButton.value;
  }

  _getInputValues() {
    this._formValues = {};// создаём пустой объект
    this._inputList.forEach(input => {// добавляем в этот объект значения всех полей
      this._formValues[input.name] = input.value;
    });
    
    return this._formValues;// возвращаем объект значений
  }
 
  close() {
    super.close();
    this._form.reset();
  }

  _disabledSubmitButton() {
    this._disabledSubmitButtonText = 'Сохранение...';
    this._popupSubmitButton.value = this._disabledSubmitButtonText;
    this._popupSubmitButton.disabled = true;//можно оставить блокировку кнопки тут?, при вызове блокировки
    //в index.js с помощью метода disabledSubmitButton() из FormValidator, кнопка не успевает блокироваться и
    //пользователь может создать много карточек из одной формы
  }

  activeSubmitButton() {
    this._popupSubmitButton.value = this._activeSubmitButtonText;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._disabledSubmitButton();//и ещё по моей логике смена надписи при сохранении с валидацией никак не связанна
      this._handleFormSubmit(this._getInputValues());
      //activeSubmitButton();
      //this.close();
    });
    
  }
}