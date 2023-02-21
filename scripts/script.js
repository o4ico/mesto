let editButton = document.querySelector('.profile__edit-button');

let popup = document.querySelector('.popup');

let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__text_form_name');

let jobInput = document.querySelector('.popup__text_form_about-me');

let profileTitle = document.querySelector('.profile__title');

let profileSubtitle = document.querySelector('.profile__subtitle');

function openPopup () {

    popup.classList.add('popup_opened');

    nameInput.setAttribute('value', profileTitle.textContent);

    jobInput.setAttribute('value', profileSubtitle.textContent);
    
};

editButton.addEventListener('click', openPopup);

let closeButton = document.querySelector('.popup__close-button');

function closePopup() {
    popup.classList.remove('popup_opened');
};

closeButton.addEventListener('click', closePopup);

//value

let submitButton = document.querySelector('.popup__submit-button');

function handleFormSubmit (evt) {

    evt.preventDefault();

    profileTitle.textContent = nameInput.value;

    profileSubtitle.textContent = jobInput.value;

    closePopup();
}

submitButton.addEventListener('click', handleFormSubmit); 