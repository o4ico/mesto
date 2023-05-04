import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
  
  constructor({ handleFormSubmit }, popupSelector, formSelector, inputSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popup = document.querySelector(popupSelector);
    this._form = this._popup.querySelector(formSelector);
    this._inputList = Array.from(this._form.querySelectorAll(inputSelector));// достаём все элементы полей
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

  setEventListeners() {
    super.setEventListeners();
    // добавим вызов функции _handleFormSubmit
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());// передадим ей объект — результат работы _getInputValues
      this.close();
    });
    
  }
}