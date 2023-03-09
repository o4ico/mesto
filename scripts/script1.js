const cardContainer = document.querySelector('.cards');

const placeNameInput = document.querySelector('.popup__text_form_place-name');
const linkInput = document.querySelector('.popup__text_form_picture-link');
/*name = placeNameInput.value;
link = linkInput.value;*/

//попап с картинкой
const imagePopup = document.querySelector('.popup_image');
const imagePopupClose = imagePopup.querySelector('.popup__close-button');

const createCard = (name, link) => {
  
  const cardTemplate = document.querySelector('#card-template').content.cloneNode(true);

  const card = cardTemplate.querySelector('.card');
  const cardImage = cardTemplate.querySelector('.card__image');
  cardImage.src = link
  const cardText = cardTemplate.querySelector('.card__text');
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

    imagePopup.classList.add('popup_opened');
    image.src = cardImage.src;
    title.textContent = cardText.textContent;
  });
  
  return newCard;
}

//добавление карточки
const addButton = document.querySelector('.profile__add-button');

const addPopup = document.querySelector('.popup_add-card');
const addPopupClose = addPopup.querySelector('.popup__close-button');
const submitAddButton = addPopup.querySelector('.popup__submit-button_add-card');



addButton.addEventListener('click', function() {

  addPopup.classList.add('popup_opened');
});

function closePopupAdd() {
  addPopup.classList.remove('popup_opened');
};

addPopupClose.addEventListener('click', closePopupAdd);

function handleFormSubmitAdd (evt) {

  evt.preventDefault();

  createCard();

  closePopupAdd();
  
  cardContainer.prepend(newCard);
}
submitAddButton.addEventListener('click', handleFormSubmitAdd);


imagePopupClose.addEventListener('click', function () {
  imagePopup.classList.remove('popup_opened');
});


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

function closePopupEdit() {
  editPopup.classList.remove('popup_opened');
};

editPopupClose.addEventListener('click', closePopupEdit);

function handleFormSubmitEdit (evt) {

    evt.preventDefault();

    profileTitle.textContent = nameInput.value;

    profileSubtitle.textContent = jobInput.value;

    closePopupEdit();
}
submitEditButton.addEventListener('click', handleFormSubmitEdit); 

/*const addInitialCards = initialCards.forEach(function(cardElement) {

  cardImage.src = cardElement.link;
  cardText.alt = cardElement.name; 
  cardText.textContent = cardElement.name;

});*/