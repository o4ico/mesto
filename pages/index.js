import {Card} from '../components/Card.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithWarning} from '../components/PopupWithWarning.js';
import {UserInfo} from '../components/UserInfo.js';
import {FormValidator} from '../components/FormValidator.js';
import {initialCards, validForm, cardContainer, imagePopup, image, title, buttonCloseImagePopup, 
  nameInput, jobInput, profileTitle, profileSubtitle, editButton, editPopup, editForm, buttonCloseEditPopup, addButton,
  addPopup, addForm, buttonCloseAddPopup} from '../utils/constants.js';
import {Section} from '../components/Section.js';
import {Api} from '../components/Api.js';
import './index.css';

const cardData = {};//-------------объект для хранения полученных карточек

function handleCardClick(linkImage, text) {//-------------открытие попапа с картинкой
  popupWithImage.open(linkImage, text);
}



function handleDeliteClick(id) {//-------------удаление карточки
  popupWarning.open();
  popupWarning.getIdValue(id);
  //api.deleteCardServer(id);
}

function handleLikeClick(cardId, isLiked) {//-------------лайки
  
    api.toggleLike(cardId, isLiked)
    .then((res) => {
      cardData[cardId].likesSum(res.likes);
    })
    .catch((err) => {
      console.log(err)
    })
  
}

function createCard(data) {//-------------функция создания новой карточки
  const card = new Card({data: data}, handleCardClick, handleLikeClick, handleDeliteClick, userInfo.id, '#card-template');
  cardData[data._id] = card;
  return card.createCard(); 
};

const cardsList = new Section(createCard,'.cards');

//-----------------------------------API--------------------------------------------------------------------

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65/',
  headers: {
    authorization: '44fad043-941f-4ab3-b9dd-75ef52317ca7',
    'Content-Type': 'application/json'
  }
});

//--------------------------------------------------профиль 

const userInfo = new UserInfo('.profile__title', '.profile__subtitle', '.profile__avatar');

//--------------------------------------------------запрос данных с сервера 
Promise.all([
  api.getInfoServer(),
  api.getInitialCards()
])
.then(res => {
  userInfo.userData(res[0]);
  userInfo.setUserInfo();
  userInfo.setUserAvatar();
  console.log(res)
  cardsList.renderItems(res[1]);
})
.catch(err => console.error(err));


const addValidator = new FormValidator(validForm, addForm);
addValidator.enableValidation();

const editValidator = new FormValidator(validForm, editForm);
editValidator.enableValidation();

//--------------------------------------------------------------попап с картинкой
const popupWithImage = new PopupWithImage('.popup_image');

popupWithImage.setEventListeners();

//--------------------------------------------------------------редактирование профиля

const popupEditProfile = new PopupWithForm({
  //тут data это реультат работы _getInputValues() из PopupWithForm
    handleFormSubmit: (data) => {

      api.patchInfoServer(data)
      .then((res) => {
        profileTitle.textContent = res.name;
        profileSubtitle.textContent = res.about;
      })
      .catch((err) => {
        console.log(err)
      })
      
    }
},'.popup_edit-profile', '.popup__form', '.popup__input');
  
editButton.addEventListener('click', () => {
    
  popupEditProfile.open();
  
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  
  editValidator.disabledSubmit();
});
popupEditProfile.setEventListeners();

//-----------------------------------------------------------добавление карточки
const popupAddCard = new PopupWithForm({

  handleFormSubmit: (data) => {

    api.postCardServer(data)
    .then((res) => {
      console.log(res);      
      cardsList.addItem(createCard(res), false);
    })
    .catch((err) => {
      console.log(err)
    })
  }
},'.popup_add-card', '.popup__form', '.popup__input')


addButton.addEventListener('click', () => {
  popupAddCard.open();
  addValidator.disabledSubmit();
});

popupAddCard.setEventListeners();

//----------------------------------------------------------попап с редактированием аватарки

const avatarPopup = document.querySelector('.popup_avatar');
const avatarForm = avatarPopup.querySelector('.popup__form');

const avatarInput = document.querySelector('.popup__input_form_avatar-link');

const avatarValidator = new FormValidator(validForm, avatarForm);
avatarValidator.enableValidation();

const popupAvatar = new PopupWithForm({

  handleFormSubmit: (data) => {
    api.patchAvatarServer(data)
      .then((res) => {
        userInfo.userData(res)
        userInfo.setUserAvatar();
      })
      .catch((err) => {
        console.log(err)
      })
  }
},'.popup_avatar', '.popup__form', '.popup__input');

const avatarButton = document.querySelector('.profile__avatar');

avatarButton.addEventListener('click', () => {
  
  popupAvatar.open();

  avatarInput.value = avatarButton.src;

  avatarValidator.disabledSubmit();
});

popupAvatar.setEventListeners();

//----------------------------------------------------------попап с предупреждением об удалении карточки
const popupWarning = new PopupWithWarning({
  handleFormSubmit: (cardId) => {
    api.deleteCardServer(cardId)
      .then((res) => {
        cardData[cardId].deleteCard();
      })
      .catch((err) => {
        console.log(err)
      })
  }
},'.popup_warning');


popupWarning.setEventListeners();