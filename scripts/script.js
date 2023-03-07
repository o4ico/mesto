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

const cardContainer = document.querySelector('.cards');



const newCard = (name, link) => {
  const cardTemplate = document.querySelector('#card-template').content.cloneNode(true);

  const placeNameInput = document.querySelector('.popup__text_form_place-name');
  const linkInput = document.querySelector('.popup__text_form_picture-link');
  name = placeNameInput.value;
  link = linkInput.value;

  const card = cardTemplate.querySelector('.card');
  const cardImage = cardTemplate.querySelector('.card__image');
  const cardText = cardTemplate.querySelector('.card__text');
  const cardDelite = cardTemplate.querySelector('.card__delite-button'); // корзина удаления
  const cardLike = cardTemplate.querySelector('.card__like-button'); // лайк

  cardImage.src = link;
  cardText.alt = name;
  cardText.textContent = name;
  cardContainer.prepend(cardTemplate);
  
  //лайк
  cardLike.addEventListener('click', function (evt) {

  evt.target.classList.toggle('card__like-button_active');
  
  });
  //удаление
  cardDelite.addEventListener('click', function (evt) {

  card.remove();
  });

  //попап с картинкой
  const imagePopup = document.querySelector('.popup_image');
  const imagePopupClose = imagePopup.querySelector('.popup__close-button');

  const imageButton = document.querySelector('.card__image');
  const image = document.querySelector('.popup__image');
  const title = document.querySelector('.popup__image-title');

  imageButton.addEventListener('click', function (name, link) {

    imagePopup.classList.add('popup_opened');
    image.src = cardImage.src;
    title.textContent = cardText.textContent;

  });

  imagePopupClose.addEventListener('click', function () {
    imagePopup.classList.remove('popup_opened');
  });

}

const addInitialCards = initialCards.forEach(function(item) {

  const cardTemplate = document.querySelector('#card-template').content.cloneNode(true);
  
  const card = cardTemplate.querySelector('.card');
  const cardImage = cardTemplate.querySelector('.card__image');
  const cardText = cardTemplate.querySelector('.card__text');
  const cardDelite = cardTemplate.querySelector('.card__delite-button'); // корзина удаления
  const cardLike = cardTemplate.querySelector('.card__like-button'); // лайк
  
  cardImage.src = item.link;
  cardText.alt = item.name; 
  cardText.textContent = item.name;

  //лайк
  cardLike.addEventListener('click', function (evt) {

    evt.target.classList.toggle('card__like-button_active');
  });
  //удаление
  cardDelite.addEventListener('click', function (evt) {

    card.remove();
  });

  cardContainer.prepend(cardTemplate);
  
  //попап с картинкой
  const imagePopup = document.querySelector('.popup_image');
  const imagePopupClose = imagePopup.querySelector('.popup__close-button');

  const imageButton = document.querySelector('.card__image');
  const image = document.querySelector('.popup__image');
  const title = document.querySelector('.popup__image-title');

  imageButton.addEventListener('click', function (name, link) {

    imagePopup.classList.add('popup_opened');
    image.src = cardImage.src;
    title.textContent = cardText.textContent;

  });

  imagePopupClose.addEventListener('click', function () {
    imagePopup.classList.remove('popup_opened');
  });
});


//добавление карточки
const addButton = document.querySelector('.profile__add-button');

const addPopup = document.querySelector('.popup_add-card');
const addPopupClose = addPopup.querySelector('.popup__close-button');
const submitAddButton = addPopup.querySelector('.popup__submit-button_add-card');

addButton.addEventListener('click', function() {

  addPopup.classList.add('popup_opened');

});

function ClosePopupAdd() {
  addPopup.classList.remove('popup_opened');
};

addPopupClose.addEventListener('click', ClosePopupAdd);

function handleFormSubmitAdd (evt) {

  evt.preventDefault();

  newCard();

  ClosePopupAdd();
}
submitAddButton.addEventListener('click', handleFormSubmitAdd);

//редактирование профиля
const nameInput = document.querySelector('.popup__text_form_name');
const jobInput = document.querySelector('.popup__text_form_about-me');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const editButton = document.querySelector('.profile__edit-button');

const editPopup = document.querySelector('.popup_edit-profile');
const editPopupClose = editPopup.querySelector('.popup__close-button');

const submitEditButton = document.querySelector('.popup__submit-button_edit-profile');

editButton.addEventListener('click', function() {

  editPopup.classList.add('popup_opened');

  nameInput.setAttribute('value', profileTitle.textContent);

  jobInput.setAttribute('value', profileSubtitle.textContent);

});

function ClosePopupEdit() {
  editPopup.classList.remove('popup_opened');
};

editPopupClose.addEventListener('click', ClosePopupEdit);

function handleFormSubmitEdit (evt) {

    evt.preventDefault();

    profileTitle.textContent = nameInput.value;

    profileSubtitle.textContent = jobInput.value;

    ClosePopupEdit();
}
submitEditButton.addEventListener('click', handleFormSubmitEdit); 

