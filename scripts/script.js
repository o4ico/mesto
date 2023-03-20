const cardContainer = document.querySelector('.cards');
const template = document.querySelector('#card-template');
const placeNameInput = document.querySelector('.popup__input_form_place-name');
const linkInput = document.querySelector('.popup__input_form_picture-link');

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

//попап с картинкой
const imagePopup = document.querySelector('.popup_image');
const imagePopupClose = imagePopup.querySelector('.popup__close-button');
const image = document.querySelector('.popup__image');
const title = document.querySelector('.popup__image-title');

const createCard = (name, link) => {
  
  const cardTemplate = template.content.cloneNode(true);

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
  cardImage.addEventListener('click', function () {

    openPopup(imagePopup);
    image.src = cardImage.src;
    image.alt = cardText.textContent;
    title.textContent = cardText.textContent;
  });
  
  return cardTemplate;
}

//добавление карточки
const addButton = document.querySelector('.profile__add-button');

const addPopup = document.querySelector('.popup_add-card');
const addForm = addPopup.querySelector('.popup__form');
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

  const cardTemplate = createCard(name, link);
  cardContainer.prepend(cardTemplate);

  closePopup(addPopup);

  addForm.reset();
}
addForm.addEventListener('submit', handleFormSubmitAdd);


imagePopupClose.addEventListener('click', function () {
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

});

buttonCloseEditPopup.addEventListener('click', function () {
  closePopup(editPopup);
  hideInputError(validForm, editForm, nameInput);
  hideInputError(validForm, editForm, jobInput);
});

function handleFormSubmitEdit (evt) {

    evt.preventDefault();

    profileTitle.textContent = nameInput.value;

    profileSubtitle.textContent = jobInput.value;

    closePopup(editPopup);
}
editForm.addEventListener('submit', handleFormSubmitEdit); 

const addInitialCards = initialCards.forEach(function(item) {

  const cardTemplate = createCard(item.name, item.link);
  cardContainer.append(cardTemplate);

});

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


