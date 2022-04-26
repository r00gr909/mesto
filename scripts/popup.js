const popupEditBtn = document.querySelector('.button__edit');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.button__close');
const popupSave = document.querySelector('.button__saving');
const AddBtn = document.querySelector('.button__add');
let Avater = document.querySelector('.profile__avatar')
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
  if (profileName.textContent === 'Муха') {
    alert('Муха хуй сосет! XD');
    profileInfo.textContent = 'Даю в попу';
  } else if (profileName.textContent === 'Айдыс') {
    alert('300? Отсоси у Тракториста, Айдис! XD');
    profileInfo.textContent = 'Все глубже и глубже';
  } else if (profileName.textContent === 'Дамир') {
    alert('Стёепа - лизатель пихды! XD');
    profileInfo.textContent = '500 руб/час';
  } else if (profileName.textContent === 'Самян') {
    alert('Властелин html  XD');
    profileInfo.textContent = 'Шуточки подъехали';
  } else if (profileName.textContent === 'Буян') {
    alert('Невиный задрот XD');
    profileInfo.textContent = 'Путь до рекурта';
  } else if (profileName.textContent === 'Кристина') {
    alert('Любюлю тебя &#4326;');
    profileInfo.textContent = 'Самая красивая ${&#4326;}';
    Avater.setAttribute('src','images/kristina.jpg')
  } else if (profileName.textContent === 'Амыр-Байлак') {
    alert('Амыр-Байлак Сенди-Хуурак - язык можно сломать');
    profileInfo.textContent = 'Senor web-разработчик';
  };
  RemovePopup();
};

popupSave.addEventListener('click', formSubmitHandler);

popupCloseBtn.addEventListener('click', function() {
  RemovePopup();
});

AddBtn.addEventListener('click', function() {
  alert('Fixed')
})


