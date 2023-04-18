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
showInputError (errorMessage) {

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
hasInvalidInput () {

  return this._inputList.some((inputElement) => {
    this._inputElement = inputElement;
    return !this._inputElement.validity.valid;
  })
}; 

// неактивная кнопка popup
disabledSubmitButton () {

  this._buttonElement.classList.add(this._inactiveButtonClass);
  this._buttonElement.disabled = true;
};

// активная кнопка popup
activeSubmitButton () {

  this._buttonElement.classList.remove(this._inactiveButtonClass);
  this._buttonElement.disabled = false;
};

// меняем состояние кнопки
toggleButtonState () {

  if (this.hasInvalidInput()) {
    this.disabledSubmitButton(this._buttonElement);
    
  } else {
    this.activeSubmitButton(this._buttonElement);
  }
}; 

// функция, которая проверяет валидность поля
isValid () {

  if (!this._inputElement.validity.valid) {
    this.showInputError(this._inputElement.validationMessage);
  } else {
    this.hideInputError();
  }
};

// добавляем обработчик для всех полей формы
setEventListeners () {

  this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);

  this.toggleButtonState();

  this._inputList.forEach((inputElement) => {
    this._inputElement = inputElement;
    this._inputElement.addEventListener('input', () => {

      this.isValid();

      this.toggleButtonState();
    });
  });

  this._formElement.addEventListener('reset', () => {

    this.disabledSubmitButton(this._buttonElement);
  })
};

enableValidation () {

  this.setEventListeners();
  this.hideInputError();
};
}

export {FormValidator};