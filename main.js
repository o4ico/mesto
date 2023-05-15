(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}var r=function(){function t(e,r,o,i,u,c){var l,a,s,f=this,p=e.data;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l=this,s=function(){return f._element=f._getTemplate(),f._elementImage=f._element.querySelector(".card__image"),f._elementText=f._element.querySelector(".card__text"),f._elementDelete=f._element.querySelector(".card__delite-button"),f._elementLike=f._element.querySelector(".card__like-button"),f._elementLikes=f._element.querySelector(".card__likes"),f._setEventListeners(),f._elementImage.src=f._link,f._elementImage.alt=f._name,f._elementText.textContent=f._name,f._elementLikes.textContent=f._likes.length,f.calcLikesSum(f._likes),f._owner._id!==f._userId&&f._elementDelete.remove(),f._element},(a=n(a="createCard"))in l?Object.defineProperty(l,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[a]=s,this._templateSelector=c,this._name=p.name,this._link=p.link,this._likes=p.likes,this._owner=p.owner,this._id=p._id,this._userId=u,this._handleCardClick=r,this._handleLikeClick=o,this._handleDeliteClick=i}var r,o;return r=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_handleLikeCardClick",value:function(){this._handleLikeClick(this._id,this._isLiked())}},{key:"_handleDeliteCardClick",value:function(){this._handleDeliteClick(this._id)}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_isLiked",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._userId}))}},{key:"calcLikesSum",value:function(t){return this._likes=t,this._isLiked()?this._elementLike.classList.add("card__like-button_active"):this._elementLike.classList.remove("card__like-button_active"),this._elementLikes.textContent=this._likes.length}},{key:"_setEventListeners",value:function(){var t=this;this._elementLike.addEventListener("click",(function(){return t._handleLikeCardClick()})),this._elementDelete.addEventListener("click",(function(){return t._handleDeliteCardClick()})),this._elementImage.addEventListener("click",(function(){return t._handleCardClick({name:t._name,link:t._link})}))}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupElement=document.querySelector(e),this._popupCloseButton=this._popupElement.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleOverlayClose",value:function(){var t=this;this._popupElement.addEventListener("mousedown",(function(e){e.target.classList.contains("popup")&&t.close()}))}},{key:"setEventListeners",value:function(){var t=this;this._popupCloseButton.addEventListener("click",(function(e){t.close()})),this._handleOverlayClose()}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},a.apply(this,arguments)}function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},s(t,e)}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&s(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=f(r);if(o){var n=f(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popupElement.querySelector(".popup__image"),e._title=e._popupElement.querySelector(".popup__image-title"),e}return e=u,(n=[{key:"open",value:function(t){this._image.src=t.link,this._image.alt=t.name,this._title.textContent=t.name,a(f(u.prototype),"open",this).call(this)}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(u);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},h.apply(this,arguments)}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(r);if(o){var n=d(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n,r){var o,c=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(o=i.call(this,e))._handleFormSubmit=c,o._popup=document.querySelector(e),o._form=o._popup.querySelector(n),o._inputList=Array.from(o._form.querySelectorAll(r)),o._popupSubmitButton=o._popup.querySelector(".popup__submit-button"),o._activeSubmitButtonText=o._popupSubmitButton.value,o._disabledSubmitButtonText=o._popupSubmitButton.value,o}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"close",value:function(){h(d(u.prototype),"close",this).call(this),this._form.reset()}},{key:"_disabledSubmitButton",value:function(){this._disabledSubmitButtonText="Сохранение...",this._popupSubmitButton.value=this._disabledSubmitButtonText}},{key:"activeSubmitButton",value:function(){this._popupSubmitButton.value=this._activeSubmitButtonText}},{key:"setEventListeners",value:function(){var t=this;h(d(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._disabledSubmitButton(),t._handleFormSubmit(t._getInputValues())}))}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(u);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(r);if(o){var n=w(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=r,n._popupSubmitButton=n._popupElement.querySelector(".popup__submit-button_warning"),n}return e=u,(n=[{key:"getIdValue",value:function(t){this._id=t}},{key:"setEventListeners",value:function(){var t=this;k(w(u.prototype),"setEventListeners",this).call(this),this._popupSubmitButton.addEventListener("click",(function(e){e.preventDefault(),t._handleFormSubmit(t._id)}))}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(u);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var j=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(e),this._profileJob=document.querySelector(n),this._profileAvatar=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserData",value:function(t){var e=t._id;this.userId=e}},{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileJob.textContent,avatar:this._profileAvatar.src}}},{key:"setUserInfo",value:function(t){this._profileName.textContent=t.name,this._profileJob.textContent=t.about}},{key:"setUserAvatar",value:function(t){this._profileAvatar.src=t.avatar}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}var B=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=n,this._inputList=Array.from(n.querySelectorAll(this._inputSelector)),this._buttonElement=n.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(){var t=this._formElement.querySelector(".".concat(this._inputElement.id,"-text-error"));this._inputElement.classList.add(this._inputErrorClass),t.textContent=this._inputElement.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(){var t=this._formElement.querySelector(".".concat(this._inputElement.id,"-text-error"));this._inputElement.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"disabledSubmitButton",value:function(){this._buttonElement.disabled=!0}},{key:"activeSubmitButton",value:function(){this._buttonElement.disabled=!1}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this.disabledSubmitButton()):(this._buttonElement.classList.remove(this._inactiveButtonClass),this.activeSubmitButton())}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError():this._showInputError()}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._inputElement=e,t._isValid(e),t._toggleButtonState()}))}))}},{key:"disabledSubmit",value:function(){var t=this;this._inputList.forEach((function(e){t._inputElement=e,t._hideInputError()})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),q={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__text_error"},T=(document.querySelector(".cards"),document.querySelector(".popup_image")),I=(document.querySelector(".popup__image"),document.querySelector(".popup__image-title"),T.querySelector(".popup__close-button"),document.querySelector(".popup__input_form_name")),R=document.querySelector(".popup__input_form_about-me"),x=document.querySelector(".profile__title"),D=document.querySelector(".profile__subtitle"),A=document.querySelector(".profile__edit-button"),V=document.querySelector(".popup_edit-profile"),U=document.forms.editProfile,F=(V.querySelector(".popup__close-button"),document.querySelector(".profile__add-button")),N=document.querySelector(".popup_add-card"),J=N.querySelector(".popup__form"),G=(N.querySelector(".popup__close-button"),document.querySelector(".popup_avatar").querySelector(".popup__form")),H=(document.querySelector(".popup__input_form_avatar-link"),document.querySelector(".profile__avatar-button"));function z(t){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==z(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===z(o)?o:String(o)),r)}var o}document.querySelector(".profile__avatar");var K=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._containerSelector=document.querySelector(n)}var e,n;return e=t,n=[{key:"addItem",value:function(t){arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?this._containerSelector.prepend(t):this._containerSelector.append(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){var n=e._renderer(t);e.addItem(n)}))}}],n&&M(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Q(t){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(t)}function W(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Q(o)?o:String(o)),r)}var o}var X=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ой ".concat(t.status))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"getInfoServer",value:function(){var t=this;return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"patchInfoServer",value:function(t){var e=this;return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return e._checkResponse(t)}))}},{key:"postCardServer",value:function(t){var e=this;return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return e._checkResponse(t)}))}},{key:"patchAvatarServer",value:function(t){var e=this;return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then((function(t){return e._checkResponse(t)}))}},{key:"_putLikeServer",value:function(t){var e=this;return fetch("".concat(this._url,"cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"_deleteLikeServer",value:function(t){var e=this;return fetch("".concat(this._url,"cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"deleteCardServer",value:function(t){var e=this;return fetch("".concat(this._url,"cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return console.log(t),e._checkResponse(t)}))}},{key:"toggleLike",value:function(t,e){return e?this._deleteLikeServer(t):this._putLikeServer(t)}}])&&W(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),Y={};function Z(t,e){ct.open(t,e)}function $(t){pt.open(),pt.getIdValue(t)}function tt(t,e){rt.toggleLike(t,e).then((function(e){Y[t].calcLikesSum(e.likes)})).catch((function(t){console.log(t)}))}function et(t){var e=new r({data:t},Z,tt,$,ot.userId,"#card-template");return Y[t._id]=e,e.createCard()}var nt=new K(et,".cards"),rt=new X({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-65/",headers:{authorization:"44fad043-941f-4ab3-b9dd-75ef52317ca7","Content-Type":"application/json"}}),ot=new j(".profile__title",".profile__subtitle",".profile__avatar");Promise.all([rt.getInfoServer(),rt.getInitialCards()]).then((function(t){ot.getUserData(t[0]),ot.setUserInfo(t[0]),ot.setUserAvatar(t[0]),console.log(t),nt.renderItems(t[1])})).catch((function(t){return console.error(t)}));var it=new B(q,J);it.enableValidation();var ut=new B(q,U);ut.enableValidation();var ct=new p(".popup_image");ct.setEventListeners();var lt=new v({handleFormSubmit:function(t){ut.disabledSubmitButton(),rt.patchInfoServer(t).then((function(t){ot.setUserInfo(t)})).then((function(){ut.activeSubmitButton(),lt.close()})).catch((function(t){console.log(t)})).finally((function(){lt.activeSubmitButton()}))}},".popup_edit-profile",".popup__form",".popup__input");A.addEventListener("click",(function(){lt.open(),I.value=x.textContent,R.value=D.textContent,ut.disabledSubmit()})),lt.setEventListeners();var at=new v({handleFormSubmit:function(t){it.disabledSubmitButton(),rt.postCardServer(t).then((function(t){console.log(t),nt.addItem(et(t),!1)})).then((function(){it.activeSubmitButton(),at.close()})).catch((function(t){console.log(t)})).finally((function(){at.activeSubmitButton()}))}},".popup_add-card",".popup__form",".popup__input");F.addEventListener("click",(function(){at.open(),it.disabledSubmit()})),at.setEventListeners();var st=new B(q,G);st.enableValidation();var ft=new v({handleFormSubmit:function(t){st.disabledSubmitButton(),rt.patchAvatarServer(t).then((function(t){ot.setUserAvatar(t)})).then((function(){st.activeSubmitButton(),ft.close()})).catch((function(t){console.log(t)})).finally((function(){ft.activeSubmitButton()}))}},".popup_avatar",".popup__form",".popup__input");H.addEventListener("click",(function(){ft.open(),st.disabledSubmit()})),ft.setEventListeners();var pt=new E({handleFormSubmit:function(t){rt.deleteCardServer(t).then((function(e){Y[t].deleteCard()})).then((function(){pt.close()})).catch((function(t){console.log(t)}))}},".popup_warning");pt.setEventListeners()})();