const popupEditBtn = document.querySelector('.button__edit');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.button__close');
const popupSave = document.querySelector('.button__saving');
const AddBtn = document.querySelector('.button__add');
let popupContainer = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job');
let profileName = document.querySelector('.profile__name');
let profileInfo = document.querySelector('.profile__specialization');

function AddPopup () {
  popup.classList.add('popup_active');
  popupContainer.classList.add('popup__container_active');
}

function RemovePopup () {
  popup.classList.remove('popup_active');
  popupContainer.classList.remove('popup__container_active');
}

popupEditBtn.addEventListener('click', function() {
  AddPopup();
});

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameInput.getAttribute('value');
  jobInput.getAttribute('value');
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  RemovePopup();
};

popupSave.addEventListener('click', formSubmitHandler);

popupCloseBtn.addEventListener('click', function() {
  RemovePopup();
});

AddBtn.addEventListener('click', function() {
  alert('Fixed')
})
