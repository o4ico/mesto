export class UserInfo {

  constructor(nameSelector, jobSelector, avatarSelector) {
    this._profileName = document.querySelector(nameSelector);
    this._profileJob = document.querySelector(jobSelector);
    this._profileAvatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileJob.textContent,
      avatar: this._profileAvatar.src
    };
  }
  setUserInfo(res) {
    this._profileName.textContent = res.name;
    this._profileJob.textContent = res.about;
  }

  setUserAvatar(res) {
    this._profileAvatar.src = res.avatar;
  }
}
