export class Api {
  constructor(config) {
    this._url = config.baseUrl;
    this._headers = config.headers;
  }

  _checkResponse (res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ой ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._url}cards`, {
      method: 'GET',
      headers: this._headers
      }
    )
    .then((res) => {
      return this._checkResponse(res);
    })
  }

  getInfoServer() {
    return fetch(`${this._url}users/me`, {
      method: 'GET',
      headers: this._headers
      }
    )
    .then((res) => {
      return this._checkResponse(res);
    })
  }

  patchInfoServer(data) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      })
      }
    )
    .then((res) => {
      return this._checkResponse(res);
    })
  }

  postCardServer(data) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
      }
    )
    .then((res) => {
      return this._checkResponse(res);
    })
  }

  patchAvatarServer(data) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
      }
    )
    .then((res) => {
      return this._checkResponse(res);
    })
  }

  _putLikeServer(cardId) {
    return fetch(`${this._url}cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
      }
    )
    .then((res) => {
      return this._checkResponse(res);
    })
  }

  _deleteLikeServer(cardId) {
    return fetch(`${this._url}cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
      }
    )
    .then((res) => {
      return this._checkResponse(res);
    })
  }

  deleteCardServer(cardId) {
    return fetch(`${this._url}cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
      }
    )
    .then((res) => {
      console.log(res);
      return this._checkResponse(res);
    })
  }

  toggleLike(cardId, isLiked) {
    if (isLiked) {
      return this._deleteLikeServer(cardId);
    } else {
      return this._putLikeServer(cardId);
    }
  }

}

