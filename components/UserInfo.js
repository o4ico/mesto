export class UserInfo {

  constructor(nameSelector, jobSelector, avatarSelector) {
    this._profileName = document.querySelector(nameSelector);
    this._profileJob = document.querySelector(jobSelector);
    this._profileAvatar = document.querySelector(avatarSelector);
  }

  userData({name, about, avatar, cohort, _id}) {
    this._name = name;
    this._about = about;
    this._avatar = avatar;
    this._cohort = cohort;
    this.id = _id;
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileJob.textContent,
      avatar: this._profileAvatar.src
    };
  }
  setUserInfo() {
    this._profileName.textContent = this._name;
    this._profileJob.textContent = this._about;
  }

  setUserAvatar() {
    this._profileAvatar.src = this._avatar;
  }
}