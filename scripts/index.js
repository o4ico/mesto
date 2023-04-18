import {Card, imagePopup} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {initialCards, validForm} from './cards.js';

const cardContainer = document.querySelector('.cards');

//закрытие-открытие попапов
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

// закрытие popup на esc
const closePopupEsc = (evt) => {

  if (evt.key === 'Escape') {
    const popupAll = document.querySelector('.popup_opened');
    closePopup(popupAll);
  };
};

// закрытие popup на оверлей
const popupList = Array.from(document.querySelectorAll('.popup')); // все попапы на странице
popupList.forEach((popup) => { // итерируем массив. объявляя каждый попап в переменную popup
  popup.addEventListener('mouseup', (evt) => { // на каждый попап устанавливаем слушателя события
    const targetClassList = evt.target.classList; // запишем в переменную класс элемента, на котором произошло событие
    if (targetClassList.contains('popup')) { // проверяем наличие класса попапа
      closePopup(popup); // если один из классов присутствует, то закрываем попап
    }
  })
});

//---------------------------------------------------------------------------------------
//попап с картинкой
const buttonCloseImagePopup = imagePopup.querySelector('.popup__close-button');
buttonCloseImagePopup.addEventListener('click', function () {
  closePopup(imagePopup);
});

//редактирование профиля
const nameInput = document.querySelector('.popup__input_form_name');
const jobInput = document.querySelector('.popup__input_form_about-me');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const editButton = document.querySelector('.profile__edit-button');

const editPopup = document.querySelector('.popup_edit-profile');
const editForm = document.forms.editProfile;
const buttonCloseEditPopup = editPopup.querySelector('.popup__close-button');
const buttonSubmitEditPopup = document.querySelector('.popup__submit-button_edit-profile');

editButton.addEventListener('click', function() {

  openPopup(editPopup);

  nameInput.value = profileTitle.textContent;

  jobInput.value = profileSubtitle.textContent;

  editValidator.hideInputError();
});

buttonCloseEditPopup.addEventListener('click', function () {
  closePopup(editPopup);
});

function handleFormSubmitEdit (evt) {

    evt.preventDefault();

    profileTitle.textContent = nameInput.value;

    profileSubtitle.textContent = jobInput.value;

    closePopup(editPopup);
}
editForm.addEventListener('submit', handleFormSubmitEdit); 

//------------------------------------------------------------------------------------
//добавление карточки
const addButton = document.querySelector('.profile__add-button');

const addPopup = document.querySelector('.popup_add-card');
const addForm = addPopup.querySelector('.popup__form');

const placeNameInput = document.querySelector('.popup__input_form_place-name');
const linkInput = document.querySelector('.popup__input_form_picture-link');

const buttonCloseAddPopup = addPopup.querySelector('.popup__close-button');
const buttonSubmitAddPopup = addPopup.querySelector('.popup__submit-button_add-card');

addButton.addEventListener('click', function() {
  openPopup(addPopup);
  addForm.reset();
  addValidator.hideInputError();
});

buttonCloseAddPopup.addEventListener('click', function() {
  closePopup(addPopup);
});

function handleFormSubmitAdd (evt) {

  evt.preventDefault();

  const data = {
  name: placeNameInput.value,
  link: linkInput.value
  };

  const card = new Card(data, '#card-template');

  const cardElement = card.createCard();

  cardContainer.prepend(cardElement);

  closePopup(addPopup);

  addForm.reset();
}
addForm.addEventListener('submit', handleFormSubmitAdd);

const addInitialCards = initialCards.forEach(function(item) {

  const card = new Card(item, '#card-template');
  const cardElement = card.createCard();

  cardContainer.append(cardElement);
  
});

const addValidator = new FormValidator(validForm, addForm);
addValidator.enableValidation();

const editValidator = new FormValidator(validForm, editForm);
editValidator.enableValidation();

export {openPopup};