import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  
  constructor({ image, title }, popupSelector) {
    super(popupSelector);
    this._image = image;
    this._title = title;
  }

  open(data) {
    this._image.src = data.link;
    this._image.alt = data.name;
    this._title.textContent = data.name;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
