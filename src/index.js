import {Card} from '../scripts/Card.js';
import {PopupWithImage} from '../scripts/PopupWithImage.js';
import {PopupWithForm} from '../scripts/PopupWithForm.js';
import {UserInfo} from '../scripts/UserInfo.js';
import {FormValidator} from '../scripts/FormValidator.js';
import {initialCards, validForm, cardContainer, image, title, buttonCloseImagePopup, 
  nameInput, jobInput, editButton, editForm, buttonCloseEditPopup, addButton,
  addForm, buttonCloseAddPopup} from '../scripts/constants.js';
import {Section} from '../scripts/Section.js';
import '../pages/index.css';

const addInitialCards = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card({
      data: item,
      handleCardClick: (item) => {
        popupWithImage.open(item);
      }}, '#card-template');

    const cardElement = card.createCard();

    addInitialCards.addItem(cardElement);
    }
},
'.cards');

addInitialCards.renderItems();

const addValidator = new FormValidator(validForm, addForm);
addValidator.enableValidation();

const editValidator = new FormValidator(validForm, editForm);
editValidator.enableValidation();

//добавление карточки--------------------------------
const addFormPopup = new PopupWithForm({

  handleFormSubmit: (data) => {

    console.log(data);
    function addCard (data, templateSelector) {

      const card = new Card({
        data: data,
        handleCardClick: (item) => {
          popupWithImage.open(item);
        }}, templateSelector);
    
      const cardElement = card.createCard();
      addInitialCards.addItem(cardElement);
      return cardElement;
    }
    cardContainer.prepend(addCard(data, '#card-template'));
  }
},'.popup_add-card', '.popup__form', '.popup__input')

addButton.addEventListener('click', () => {
  addFormPopup.open();
  addValidator.disabledSubmit();
});

buttonCloseAddPopup.addEventListener('click', () => {
  addFormPopup.close();
});
addFormPopup.setEventListeners();

//попап с картинкой--------------------------------
const popupWithImage = new PopupWithImage({ image: image, title: title }, '.popup_image');

buttonCloseImagePopup.addEventListener('click', () => {
  popupWithImage.close();
});
popupWithImage.setEventListeners();

//редактирование профиля--------------------------------

const userInfo = new UserInfo('.profile__title', '.profile__subtitle');

const editFormPopup = new PopupWithForm({

  handleFormSubmit: (data) => {
    userInfo._setUserInfo(data);
  }
},'.popup_edit-profile', '.popup__form', '.popup__input');

editButton.addEventListener('click', () => {
  editFormPopup.open();
  userInfo.setInputValues(nameInput, jobInput);
  editValidator.disabledSubmit();
});

buttonCloseEditPopup.addEventListener('click', () => {
  editFormPopup.close();
});
editFormPopup.setEventListeners();