let nameInput = document.querySelector('.popup-container__input_name');
let jobInput = document.querySelector('.popup-container__input_job');
let profileName = document.querySelector('.profile__name');
let profileInfo = document.querySelector('.profile__specialization');

const popupEditBtn = document.querySelector('.profile__btn_edit');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup-container__btn_close');
const popupSaveBtn = document.querySelector('.popup-container__btn_saving');



function AddPopup () {
  popup.classList.add('popup_active');
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
}

function RemovePopup () {
  popup.classList.remove('popup_active');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  RemovePopup();
};

popupEditBtn.addEventListener('click', AddPopup);
popupCloseBtn.addEventListener('click', RemovePopup);
popupSaveBtn.addEventListener('click',formSubmitHandler);




