class FormValidator {
  constructor(validForm, formElement) {
    this._formSelector = validForm.formSelector;
    this._inputSelector = validForm.inputSelector;
    this._submitButtonSelector = validForm.submitButtonSelector;
    this._inactiveButtonClass = validForm.inactiveButtonClass;
    this._inputErrorClass = validForm.inputErrorClass;
    this._errorClass = validForm.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = formElement.querySelector(this._submitButtonSelector);

  }

// Показ текста ошибки
_showInputError () {

  const errorElement = this._formElement.querySelector(`.${this._inputElement.id}-text-error`);
  this._inputElement.classList.add(this._inputErrorClass);
  errorElement.textContent = this._inputElement.validationMessage;
  errorElement.classList.add(this._errorClass);
};

// Скрыть текст ошибки
_hideInputError () {
  
  const errorElement = this._formElement.querySelector(`.${this._inputElement.id}-text-error`);
  this._inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = '';
};

// поиск невалидных полей
_hasInvalidInput () {

  return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 

// неактивная кнопка popup
disabledSubmitButton () {
  this._buttonElement.disabled = true;
};

// активная кнопка popup
activeSubmitButton () {
  this._buttonElement.disabled = false;
};

// меняем состояние кнопки
_toggleButtonState () {

  if (this._hasInvalidInput()) {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this.disabledSubmitButton();
  } else {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this.activeSubmitButton();
  }
}; 

// функция, которая проверяет валидность поля
_isValid (inputElement) {

  if (!inputElement.validity.valid) {
    this._showInputError();
  } else {
    this._hideInputError();
  }
};

// добавляем обработчик для всех полей формы
_setEventListeners () {

  this._toggleButtonState();

  this._inputList.forEach((inputElement) => {
    
    inputElement.addEventListener('input', () => {
      this._inputElement = inputElement;
      this._isValid(inputElement);

      this._toggleButtonState();
    });
  });
};

disabledSubmit() {
    this._inputList.forEach((inputElement) => {
    this._inputElement = inputElement;
    this._hideInputError();
  });

  this._toggleButtonState();
};

enableValidation () {

  this._setEventListeners();
}; 

}

export {FormValidator};