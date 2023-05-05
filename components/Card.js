export class Card {

  constructor({ data, handleCardClick },  templateSelector) {
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardTemplate;
  }
  //лайк
  _handleLikeClick() {
      this._elementLike.classList.toggle('card__like-button_active');
  }
  //удаление
  _handleDeliteClick() {
    this._element.remove();
  }

  _setEventListeners() {
  
  this._elementLike.addEventListener('click', () => this._handleLikeClick());
  
  this._elementDelite.addEventListener('click', () => this._handleDeliteClick());

  this._elementImage.addEventListener('click', () => this._handleCardClick({name: this._name, link: this._link}));
  }

  createCard = () => {
  
    this._element = this._getTemplate();

    this._elementImage = this._element.querySelector('.card__image');
    this._elementText = this._element.querySelector('.card__text');
    this._elementDelite = this._element.querySelector('.card__delite-button'); // корзина удаления
    this._elementLike = this._element.querySelector('.card__like-button'); // лайк

    this._setEventListeners();

    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._elementText.textContent = this._name;
    
    return this._element;
  }
}

