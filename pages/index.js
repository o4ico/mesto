import {Card} from '../components/Card.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {FormValidator} from '../components/FormValidator.js';
import {initialCards, validForm, cardContainer, imagePopup, image, title, buttonCloseImagePopup, 
  nameInput, jobInput, profileTitle, profileSubtitle, editButton, editPopup, editForm, buttonCloseEditPopup, addButton,
  addPopup, addForm, buttonCloseAddPopup} from '../utils/constants.js';
import {Section} from '../components/Section.js';
import './index.css';

const createCard = (data) => {
  const card = new Card({
    data: data,
    handleCardClick: (item) => {
      popupWithImage.open(item);
    }}, '#card-template');
    const cardElement = card.createCard(); 
    cardsList.addItem(cardElement); 
};

const cardsList = new Section({
  data: initialCards,
  renderer: (item) => {
    createCard(item);
    }
},
'.cards');

cardsList.renderItems();

const addValidator = new FormValidator(validForm, addForm);
addValidator.enableValidation();

const editValidator = new FormValidator(validForm, editForm);
editValidator.enableValidation();

//добавление карточки--------------------------------
const popupAddCard = new PopupWithForm({

  handleFormSubmit: (data) => {
    createCard(data);
  }
},'.popup_add-card', '.popup__form', '.popup__input')

addButton.addEventListener('click', () => {
  popupAddCard.open();
  addValidator.disabledSubmit();
});

popupAddCard.setEventListeners();

//попап с картинкой--------------------------------
const popupWithImage = new PopupWithImage('.popup_image');

popupWithImage.setEventListeners();

//редактирование профиля--------------------------------

const userInfo = new UserInfo('.profile__title', '.profile__subtitle');

const popupEditProfile = new PopupWithForm({

  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
  }
},'.popup_edit-profile', '.popup__form', '.popup__input');

editButton.addEventListener('click', () => {
  
  popupEditProfile.open();

  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;

  editValidator.disabledSubmit();
});


popupEditProfile.setEventListeners();