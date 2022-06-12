const nameInput = document.querySelector('#name-edit');
const jobInput = document.querySelector('#job-edit');
const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__specialization');
const popupEditName = document.querySelector('#edit');
const popupAddCard = document.querySelector('#add');
const popupImage = document.querySelector('#image-zoom');
const profileForm = document.querySelector('#edit-name');
const cardAddForm = document.querySelector('#add-card');
const popupNewCardName = cardAddForm.querySelector('#card-name');
const popupNewCardImg = cardAddForm.querySelector('#card-url');
const profileEditBtn = document.querySelector('.profile__btn_edit');
const cardAddBtn = document.querySelector('.profile__btn_add');
const popups = document.querySelectorAll('.popup');
const popupContainer = document.querySelector('.popup-container')
const cardGrid = document.querySelector('.card-grid');
const popupZoomImg = document.querySelector('.popup-image__img');
const popupZoomImgText = document.querySelector('.popup-image__text');

function handleEscKey(evt) {
  if (evt.key === 'Escape') {
    removePopup (document.querySelector('.popup_active'));
  }
};


function addPopup (popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', handleEscKey);
};

function removePopup (popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', handleEscKey);
};


popups.forEach((popup) => {
  const popupCloseBtn = popup.querySelector('.popup__btn_close');
  const popupItem = popup.querySelector('.popup__item')
  popup.addEventListener('click', (evt) => {
    if (popupCloseBtn.contains(evt.target)) {
      removePopup(popup);
    } else if (popup.contains(popupItem)) {
      if (!popupItem.contains(evt.target)) {
        removePopup(popup);
      }
    } else if (evt.target !== popupZoomImg) {
      removePopup(popup);
    }
  });
});


profileEditBtn.addEventListener ('click', () => {
  addPopup(popupEditName);
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
});

cardAddBtn.addEventListener('click', () => {
  addPopup(popupAddCard);
});


function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = jobInput.value;
  removePopup(popupEditName);
};

profileForm.addEventListener('submit', handleProfileFormSubmit);


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
const cardLikeBtn = cardGridTemplate.querySelector('.card-grid__btn-like');



function createImagePopup(name, image) {
  popupZoomImg.src = image;
  popupZoomImg.alt = name;
  popupZoomImgText.textContent = name;
}



const toggleLike = (evt) => {
  evt.target.classList.toggle('card-grid__btn-like_active');
}


function createCard(image, name) {
  const cardsGridItem = cardGridTemplate.querySelector('.card-grid__item').cloneNode(true);
  const cardLikeBtn = cardsGridItem.querySelector('.card-grid__btn-like');
  const cardDeleteBtn = cardsGridItem.querySelector('.card-grid__trash');
  const cardImg = cardsGridItem.querySelector('.card-grid__img');
  const cardName = cardsGridItem.querySelector('.card-grid__name');
  cardImg.src = image;
  cardName.alt = name;
  cardName.textContent = name;
  cardImg.addEventListener ('click', () => {
    addPopup(popupImage);
    createImagePopup(name, image);
  });
  cardLikeBtn.addEventListener ('click', toggleLike);
  cardDeleteBtn.addEventListener ('click', () => {
    cardsGridItem.remove();
  });
  return cardsGridItem;
};


function addCardsGrid(initialCards) {
  initialCards.forEach((item) => {
    cardGrid.append(createCard(item.link, item.name));
  });
};

addCardsGrid(initialCards);

function addNewCard(evt) {
  evt.preventDefault();
  cardGrid.prepend(createCard(popupNewCardImg.value, popupNewCardName.value));
  cardAddForm.reset();
  removePopup(popupAddCard);
  const popupBtnSave = cardAddForm.querySelector('.popup__btn_saving');
  popupBtnSave.classList.add('popup__btn_disabled');
  popupBtnSave.disabled = true;
}

cardAddForm.addEventListener('submit', addNewCard);


/* function addNewCard(evt) {
  evt.preventDefault();
  elements.prepend(createCard(imageInput.value, mestoInput.value));
  closePopup(popupAdd);
  addCardForm.reset();
  const popupBtn = addCardForm.querySelector('.popup__save-button');
  const popupBtnText = popupBtn.querySelector('.popup__save-text');
  popupBtnText.classList.add('popup__save-text_disabled');
  popupBtn.classList.add('popup__save-button_disabled');
  popupBtn.disabled = true;
}
 */
