export class Card {

  constructor({ data }, handleCardClick, handleLikeClick, handleDeliteClick, id, templateSelector) {
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._owner = data.owner;
    this._id = data._id;
    this._userId = id;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeliteClick = handleDeliteClick;
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
  _handleLikeCardClick() {
    this._handleLikeClick(this._id, this._isLiked());
  }

  //удаление
  _handleDeliteCardClick() {
    this._handleDeliteClick(this._id);
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _isLiked () {
    return this._likes.some( like => {
      return like._id === this._userId;
    })
  }


  calclikesSum (data) {
    this._likes = data;
    if (this._isLiked()) {
      this._elementLike.classList.add('card__like-button_active');
    } else {
      this._elementLike.classList.remove('card__like-button_active');
    }
    
    return this._elementLikes.textContent = this._likes.length;
  }

  _setEventListeners() {
  
  this._elementLike.addEventListener('click', () => this._handleLikeCardClick());
  
  this._elementDelete.addEventListener('click', () => this._handleDeliteCardClick());

  this._elementImage.addEventListener('click', () => this._handleCardClick({name: this._name, link: this._link}));
  }

  createCard = () => {
  
    this._element = this._getTemplate();

    this._elementImage = this._element.querySelector('.card__image');
    this._elementText = this._element.querySelector('.card__text');
    this._elementDelete = this._element.querySelector('.card__delite-button'); // корзина удаления
    this._elementLike = this._element.querySelector('.card__like-button'); // лайк
    this._elementLikes = this._element.querySelector('.card__likes'); // счетчик лайков


    this._setEventListeners();

    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._elementText.textContent = this._name;
    this._elementLikes.textContent = this._likes.length;
    
    this.calclikesSum(this._likes);
    

    if (this._owner._id !== this._userId) {
      this._elementDelete.remove();
    }

    return this._element;
  }
}

