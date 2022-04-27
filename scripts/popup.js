const popupEditBtn = document.querySelector('.profile__btn_edit');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup-container__btn_close');
const popupSaveBtn = document.querySelector('.popup-container__btn_saving');
let popupContainer = document.querySelector('.popup-container');
let nameInput = document.querySelector('.popup-container__input_name');
let jobInput = document.querySelector('.popup-container__input_job');
let profileName = document.querySelector('.profile__name');
let profileInfo = document.querySelector('.profile__specialization');

function AddPopup () {
  popup.classList.add('popup_active');
  popupContainer.classList.add('popup-container_active');
}

function RemovePopup () {
  popup.classList.remove('popup_active');
  popupContainer.classList.remove('popup-container_active');
}

popupEditBtn.addEventListener('click', function() {
  AddPopup();
});


function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  nameInput.setAttribute('value', profileName.textContent);
  //let b = jobInput.getAttribute('value');
  RemovePopup();
};

popupSaveBtn.addEventListener('click',formSubmitHandler);

popupCloseBtn.addEventListener('click', function() {
  RemovePopup();
});


