import {Popup} from './Popup.js';

export class PopupWithWarning extends Popup {
  
  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupSubmitButton = this._popupElement.querySelector('.popup__submit-button_warning');
  }

  getIdValue(id) {
    this._id = id;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSubmitButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._id);
      super.close();
    }); 
  }
}
