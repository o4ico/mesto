const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const validForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__text_error'
};


const cardContainer = document.querySelector('.cards');

//попап с картинкой
const imagePopup = document.querySelector('.popup_image');
const image = document.querySelector('.popup__image');
const title = document.querySelector('.popup__image-title');

const buttonCloseImagePopup = imagePopup.querySelector('.popup__close-button');
//редактирование профиля
const nameInput = document.querySelector('.popup__input_form_name');
const jobInput = document.querySelector('.popup__input_form_about-me');

const editButton = document.querySelector('.profile__edit-button');

const editPopup = document.querySelector('.popup_edit-profile');
const editForm = document.forms.editProfile;
const buttonCloseEditPopup = editPopup.querySelector('.popup__close-button');

//добавление карточки
const addButton = document.querySelector('.profile__add-button');

const addPopup = document.querySelector('.popup_add-card');
const addForm = addPopup.querySelector('.popup__form');

const buttonCloseAddPopup = addPopup.querySelector('.popup__close-button');



export {initialCards, validForm, cardContainer, imagePopup, image, title, buttonCloseImagePopup, 
  nameInput, jobInput, editButton, editPopup, editForm, buttonCloseEditPopup, addButton,
  addPopup, addForm, buttonCloseAddPopup};