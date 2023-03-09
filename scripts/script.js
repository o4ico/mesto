const cardContainer = document.querySelector('.cards');

const placeNameInput = document.querySelector('.popup__text_form_place-name');
const linkInput = document.querySelector('.popup__text_form_picture-link');

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
}

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
}

//попап с картинкой
const imagePopup = document.querySelector('.popup_image');
const imagePopupClose = imagePopup.querySelector('.popup__close-button');

const createCard = (name, link) => {
  
  const cardTemplate = document.querySelector('#card-template').content.cloneNode(true);

  const card = cardTemplate.querySelector('.card');
  const cardImage = cardTemplate.querySelector('.card__image');
  cardImage.src = link
  const cardText = cardTemplate.querySelector('.card__text');
  cardImage.alt = name;
  cardText.textContent = name
  const cardDelite = cardTemplate.querySelector('.card__delite-button'); // корзина удаления
  const cardLike = cardTemplate.querySelector('.card__like-button'); // лайк

  //лайк
  cardLike.addEventListener('click', function (evt) {

  evt.target.classList.toggle('card__like-button_active');
  
  });
  //удаление
  cardDelite.addEventListener('click', function (evt) {

  card.remove();
  });

  //картинка
  const imageButton = cardTemplate.querySelector('.card__image');
 
  const image = document.querySelector('.popup__image');
  const title = document.querySelector('.popup__image-title');

  imageButton.addEventListener('click', function () {

    openPopup(imagePopup);
    image.src = cardImage.src;
    image.alt = cardText.textContent;
    title.textContent = cardText.textContent;
  });
  
  return cardTemplate;
}

const cardTemplate = createCard();



//добавление карточки
const addButton = document.querySelector('.profile__add-button');

const addPopup = document.querySelector('.popup_add-card');
const buttonCloseAddPopup = addPopup.querySelector('.popup__close-button');
const buttonSubmitAddPopup = addPopup.querySelector('.popup__submit-button_add-card');

addButton.addEventListener('click', function() {
  openPopup(addPopup);
});

buttonCloseAddPopup.addEventListener('click', function() {
  closePopup(addPopup);
});

function handleFormSubmitAdd (evt, name, link) {

  evt.preventDefault();
  name = placeNameInput.value;
  link = linkInput.value;

  closePopup(addPopup);

  const cardTemplate = createCard(name, link);
  cardContainer.prepend(cardTemplate);
  placeNameInput.value = '';
  linkInput.value = '';
}
buttonSubmitAddPopup.addEventListener('click', handleFormSubmitAdd);


imagePopupClose.addEventListener('click', function () {
  closePopup(imagePopup);
});


//редактирование профиля
const nameInput = document.querySelector('.popup__text_form_name');
const jobInput = document.querySelector('.popup__text_form_about-me');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const editButton = document.querySelector('.profile__edit-button');

const editPopup = document.querySelector('.popup_edit-profile');
const buttonCloseEditPopup = editPopup.querySelector('.popup__close-button');

const buttonSubmitEditPopup = document.querySelector('.popup__submit-button_edit-profile');

editButton.addEventListener('click', function() {

  openPopup(editPopup);

  nameInput.setAttribute('value', profileTitle.textContent);

  jobInput.setAttribute('value', profileSubtitle.textContent);

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
buttonSubmitEditPopup.addEventListener('click', handleFormSubmitEdit); 

const addInitialCards = initialCards.forEach(function(item) {

  const cardTemplate = createCard(item.name, item.link);
  cardContainer.append(cardTemplate);

});