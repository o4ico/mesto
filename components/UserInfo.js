export class UserInfo {

  constructor(nameSelector, jobSelector) {
    this._profileName = document.querySelector(nameSelector);
    this._profileJob = document.querySelector(jobSelector);
  }

  getUserInfo() {
    return {
      nameProfile: this._profileName.textContent,
      aboutMe: this._profileJob.textContent,
    };
  }
  setUserInfo(data) {
  
    this._profileName.textContent = data.nameProfile;

    this._profileJob.textContent = data.aboutMe;
  }
}