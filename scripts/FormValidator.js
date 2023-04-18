class FormValidator {
  constructor(validForm, formElement) {
    this._formSelector = validForm.formSelector;
    this._inputSelector = validForm.inputSelector;
    this._submitButtonSelector = validForm.submitButtonSelector;
    this._inactiveButtonClass = validForm.inactiveButtonClass;
    this._inputErrorClass = validForm.inputErrorClass;
    this._errorClass = validForm.errorClass;
    this._formElement = formElement;
    this._inputElement = this._formElement.querySelectorAll(this._inputSelector);
  }

// Показ текста ошибки
_showInputError (errorMessage) {

  const errorElement = this._formElement.querySelector(`.${this._inputElement.id}-text-error`);
  this._inputElement.classList.add(this._inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(this._errorClass);
};

// Скрыть текст ошибки
hideInputError () {
  
  const errorElement = this._formElement.querySelector(`.${this._inputElement.id}-text-error`);
  this._inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = '';
};

// поиск невалидных полей
_hasInvalidInput () {

  return this._inputList.some((inputElement) => {
    this._inputElement = inputElement;
    return !this._inputElement.validity.valid;
  })
}; 

// неактивная кнопка popup
_disabledSubmitButton () {

  this._buttonElement.classList.add(this._inactiveButtonClass);
  this._buttonElement.disabled = true;
};

// активная кнопка popup
_activeSubmitButton () {

  this._buttonElement.classList.remove(this._inactiveButtonClass);
  this._buttonElement.disabled = false;
};

// меняем состояние кнопки
_toggleButtonState () {

  if (this._hasInvalidInput()) {
    this._disabledSubmitButton(this._buttonElement);
    
  } else {
    this._activeSubmitButton(this._buttonElement);
  }
}; 

// функция, которая проверяет валидность поля
_isValid () {

  if (!this._inputElement.validity.valid) {
    this._showInputError(this._inputElement.validationMessage);
  } else {
    this.hideInputError();
  }
};

// добавляем обработчик для всех полей формы
_setEventListeners () {

  this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);

  this._toggleButtonState();

  this._inputList.forEach((inputElement) => {
    this._inputElement = inputElement;
    this._inputElement.addEventListener('input', () => {

      this._isValid();

      this._toggleButtonState();
    });
  });

  this._formElement.addEventListener('reset', () => {

    this._disabledSubmitButton(this._buttonElement);
  })
};

enableValidation () {

  this._setEventListeners();
  this.hideInputError();
};
}

export {FormValidator};