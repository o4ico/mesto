export class UserInfo {

  constructor(nameSelector, jobSelector) {
    this._profileName = document.querySelector(nameSelector);
    this._profileJob = document.querySelector(jobSelector);
  }

  _getUserInfo() {
    return {
      nameProfile: this._profileName.textContent,
      aboutMe: this._profileJob.textContent,
    };
  }
  _setUserInfo(data) {
  
    this._profileName.textContent = data.nameProfile;

    this._profileJob.textContent = data.aboutMe;
  }

  setInputValues(nameInput, jobInput) {

    this._getUserInfo();

    nameInput.value = this._profileName.textContent;
    jobInput.value = this._profileJob.textContent;
  }
}