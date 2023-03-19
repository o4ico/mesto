const validForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__text_error'
};

// Показ текста ошибки
const showInputError = (validForm, formElement, inputElement, errorMessage) => {

  const errorElement = formElement.querySelector(`.${inputElement.id}-text-error`);
  inputElement.classList.add(validForm.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validForm.errorClass);
};

// Скрыть текст ошибки
const hideInputError = (validForm, formElement, inputElement) => {
  
  const errorElement = formElement.querySelector(`.${inputElement.id}-text-error`);
  inputElement.classList.remove(validForm.inputErrorClass);
  errorElement.classList.remove(validForm.errorClass);
  errorElement.textContent = '';
};

// поиск невалидных полей
const hasInvalidInput = (inputList) => {

  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 

// неактивная кнопка popup
const disabledSubmitButton = (validForm, buttonElement) => {

  buttonElement.classList.add(validForm.inactiveButtonClass);
  buttonElement.disabled = true;
};

// активная кнопка popup
const activeSubmitButton = (validForm, buttonElement) => {

  buttonElement.classList.remove(validForm.inactiveButtonClass);
  buttonElement.disabled = false;
};

// меняем состояние кнопки
const toggleButtonState = (validForm, inputList, buttonElement) => {

  if (hasInvalidInput(inputList)) {
    disabledSubmitButton(validForm, buttonElement);
  } else {
    activeSubmitButton(validForm, buttonElement);
  }
}; 

// функция, которая проверяет валидность поля
const isValid = (validForm, formElement, inputElement) => {

  if (!inputElement.validity.valid) {
    showInputError(validForm, formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(validForm, formElement, inputElement);
  }
};

// добавляем обработчик для всех полей формы
const setEventListeners = (validForm, formElement) => {

  const inputList = Array.from(formElement.querySelectorAll(validForm.inputSelector));
  const buttonElement = formElement.querySelector(validForm.submitButtonSelector);

  toggleButtonState(validForm, inputList, buttonElement);

  inputList.forEach((inputElement) => {

    inputElement.addEventListener('input', () => {

      isValid(validForm, formElement, inputElement);

      toggleButtonState(validForm, inputList, buttonElement);
    });
  });

  formElement.addEventListener('reset', () => {

    disabledSubmitButton(validForm, buttonElement);
  })
};

const enableValidation = (validForm) => {

  const formList = Array.from(document.querySelectorAll(validForm.formSelector));

  formList.forEach((formElement) => {

    setEventListeners(validForm, formElement);
  });
};

// перебор всех форм на странице
enableValidation(validForm);
