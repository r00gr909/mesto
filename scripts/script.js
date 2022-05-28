let nameInput = document.querySelector('#name-edit');
let jobInput = document.querySelector('#job-edit');
let cardNameInput = document.querySelector('.add-card__input_name');
let cardUrlInput = document.querySelector('.add-card__input_url');
let profileName = document.querySelector('.profile__name');
let profileInfo = document.querySelector('.profile__specialization');

const editName = document.querySelector('#edit');
const addCard = document.querySelector('#add');
const popupImage = document.querySelector('#image-zoom');
const formElement = document.querySelector('#edit-name');
const formElementAdd = document.querySelector('#add-card');
const NewCardName = formElementAdd.querySelector('#card-name');
const NewCardImg = formElementAdd.querySelector('#card-url');
const editBtn = document.querySelector('.profile__btn_edit');
const addBtn = document.querySelector('.profile__btn_add');
const popups = document.querySelectorAll('.popup');
const popupContainer = document.querySelector('.popup-container')
const popupSaveBtn = document.querySelector('.popup-container__btn_saving');
const cardGrid = document.querySelector('.card-grid');
const zoomImg = document.querySelector('.popup__image_img');
const zoomImgText = document.querySelector('.popup__image_text');

function AddPopup (popup) {
  popup.classList.add('popup_active');
}

function RemovePopup (popup) {
  popup.classList.remove('popup_active');
}

popups.forEach((popup) => {
  const popupCloseBtn = popup.querySelector('.popup__btn_close');
  popupCloseBtn.addEventListener('click', () => {
    RemovePopup(popup);
  });
});

editBtn.addEventListener ('click', () => {
  AddPopup(editName);
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
});

addBtn.addEventListener('click', () => {
  AddPopup(addCard);
});


function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  RemovePopup(editName);
};

formElement.addEventListener('submit', formSubmitHandler);


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const CardGridTemplate = document.querySelector('#card-grid-template').content;

const likeBtn = CardGridTemplate.querySelector('.card-grid__btn-like');
const deleteBtn = CardGridTemplate.querySelector('.card-grid__trash');

function createImagePopup(name, image) {
  zoomImg.src = image;
  zoomImg.alt = name;
  zoomImgText.textContent = name;
}



const likeActive = (evt) => {
  evt.target.classList.toggle('card-grid__btn-like_active');
}


function CreateCard(image, name) {
  const cardsGridItem = CardGridTemplate.querySelector('.card-grid__item').cloneNode(true);
  const CardImg = cardsGridItem.querySelector('.card-grid__img');
  const CardName = cardsGridItem.querySelector('.card-grid__name');
  const likeBtn =  cardsGridItem.querySelector('.card-grid__btn-like');
  const deleteBtn =  cardsGridItem.querySelector('.card-grid__trash');
  CardImg.src = image;
  CardName.alt = name;
  CardName.textContent = name;
  CardImg.addEventListener ('click', () => {
    AddPopup(popupImage);
    createImagePopup(name, image);
  });
  likeBtn.addEventListener('click', likeActive);
  deleteBtn.addEventListener('click', () => {
    cardsGridItem.remove();
  });
  cardGrid.append(cardsGridItem);
  return cardsGridItem;
}


  function AddCardsGrid(initialCards) {
  for (let i = 0; i < initialCards.length; i += 1) {
  const cardsGridItem = CardGridTemplate.querySelector('.card-grid__item').cloneNode(true);
  cardsGridItem.querySelector('.card-grid__img').src = initialCards[i].link;
  cardsGridItem.querySelector('.card-grid__name').alt = initialCards[i].name;
  cardsGridItem.querySelector('.card-grid__name').textContent = initialCards[i].name;
  cardsGridItem.querySelector('.card-grid__img').addEventListener ('click', () => {
    AddPopup(popupImage);
    createImagePopup(initialCards[i].name, initialCards[i].link);
  });
  const likeBtn =  cardsGridItem.querySelector('.card-grid__btn-like');
  const deleteBtn =  cardsGridItem.querySelector('.card-grid__trash');
  likeBtn.addEventListener('click', likeActive);
  deleteBtn.addEventListener('click', () => {
    cardsGridItem.remove();
  });
  cardGrid.append(cardsGridItem);
  }
};

AddCardsGrid(initialCards);



function addNewCard(evt) {
  evt.preventDefault();
  cardGrid.prepend(CreateCard(NewCardImg.value, NewCardName.value));
  RemovePopup(addCard);
  NewCardName.value = "";
  NewCardImg.value = "";
}

formElementAdd.addEventListener('submit', addNewCard);

