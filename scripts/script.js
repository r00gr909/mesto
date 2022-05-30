const nameInput = document.querySelector('#name-edit');
const jobInput = document.querySelector('#job-edit');
const cardNameInput = document.querySelector('.add-card__input_name');
const cardUrlInput = document.querySelector('.add-card__input_url');
const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__specialization');

const popupEditName = document.querySelector('#edit');
const popupAddCard = document.querySelector('#add');
const popupImage = document.querySelector('#image-zoom');
const formElement = document.querySelector('#edit-name');
const formElementAdd = document.querySelector('#add-card');
const popupNewCardName = formElementAdd.querySelector('#card-name');
const popupNewCardImg = formElementAdd.querySelector('#card-url');
const profileEditBtn = document.querySelector('.profile__btn_edit');
const cardAddBtn = document.querySelector('.profile__btn_add');
const popups = document.querySelectorAll('.popup');
const popupContainer = document.querySelector('.popup-container')
const popupSaveBtn = document.querySelector('.popup-container__btn_saving');
const cardGrid = document.querySelector('.card-grid');
const popupZoomImg = document.querySelector('.popup-image__img');
const popupZoomImgText = document.querySelector('.popup-image__text');

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

profileEditBtn.addEventListener ('click', () => {
  AddPopup(popupEditName);
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
});

cardAddBtn.addEventListener('click', () => {
  AddPopup(popupAddCard);
});


function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  RemovePopup(popupEditName);
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


const cardGridTemplate = document.querySelector('#card-grid-template').content;
const cardsGridItem = cardGridTemplate.querySelector('.card-grid__item');
const cardLikeBtn = cardGridTemplate.querySelector('.card-grid__btn-like');
const cardDeleteBtn = cardGridTemplate.querySelector('.card-grid__trash');

function createImagePopup(name, image) {
  popupZoomImg.src = image;
  popupZoomImg.alt = name;
  popupZoomImgText.textContent = name;
}



const likeActive = (evt) => {
  evt.target.classList.toggle('card-grid__btn-like_active');
}


function CreateCard(image, name) {
  cardsGridItem.cloneNode(true);
  const cardImg = cardsGridItem.querySelector('.card-grid__img');
  const cardName = cardsGridItem.querySelector('.card-grid__name');
  cardImg.src = image;
  cardName.alt = name;
  cardName.textContent = name;
  cardImg.addEventListener ('click', () => {
    AddPopup(popupImage);
    createImagePopup(name, image);
  });
  cardLikeBtn.addEventListener('click', likeActive);
  cardDeleteBtn.addEventListener('click', () => {
    cardsGridItem.remove();
  });
  return cardsGridItem;
}
/*
function RenderCard (image, name) {
  cardsGridItem.cloneNode(true);
  CreateCard (image, name);
  cardGrid.append(cardsGridItem);
} */

/* RenderCard (image, name); */

  function AddCardsGrid(initialCards) {
  for (let i = 0; i < initialCards.length; i += 1) {
  const cardsGridItem = cardGridTemplate.querySelector('.card-grid__item').cloneNode(true);
  cardsGridItem.querySelector('.card-grid__img').src = initialCards[i].link;
  cardsGridItem.querySelector('.card-grid__name').alt = initialCards[i].name;
  cardsGridItem.querySelector('.card-grid__name').textContent = initialCards[i].name;
  cardsGridItem.querySelector('.card-grid__img').addEventListener ('click', () => {
    AddPopup(popupImage);
    createImagePopup(initialCards[i].name, initialCards[i].link);
  });
  const cardLikeBtn =  cardsGridItem.querySelector('.card-grid__btn-like');
  const cardDeleteBtn =  cardsGridItem.querySelector('.card-grid__trash');
  cardLikeBtn.addEventListener('click', likeActive);
  cardDeleteBtn.addEventListener('click', () => {
    cardsGridItem.remove();
  });
  cardGrid.append(cardsGridItem);
  }
};

AddCardsGrid(initialCards);



function addNewCard(evt) {
  evt.preventDefault();
  cardGrid.prepend(CreateCard(popupNewCardImg.value, popupNewCardName.value));
  RemovePopup(popupAddCard);
  popupNewCardName.value = "";
  popupNewCardImg.value = "";
}

formElementAdd.addEventListener('submit', addNewCard);

