export class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  addItem(element, reverse = true) {
    if (reverse) {
      this._containerSelector.append(element);
    } else {
      this._containerSelector.prepend(element);
    }
    
  }

  renderItems(items) {
    items.forEach(item => {
      const element = this._renderer(item);
      this.addItem(element);
    });
  }
}
