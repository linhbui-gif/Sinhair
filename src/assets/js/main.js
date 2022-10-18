window.onload = () => {
  navigationMobile.init();
};
let navigationMobile = {
  init: function () {
    this.toggleShow();
  },
  toggleShow: function () {
    const buttonBar = document.querySelector('.Navigation-item .button-bars');
    const listMenu = document.querySelector('.Navigation-item .list-item-group');
    buttonBar.addEventListener('click', () => {
      listMenu.classList.toggle('active');
    })
  }
}



// select option
let select = document.querySelector('.select');
const selectHandle = () => {
  let currentSelect = document.querySelector('.select .select-current');
  let currentText = document.querySelector('.select .select-current p');
  let optionSelect = document.querySelector('.select .select-option');

  select.addEventListener('click', (e) => {
    currentSelect.classList.toggle('active');
    optionSelect.classList.toggle('active');
    e.stopPropagation();
  });


  optionSelect.addEventListener('click', (e) => {
    let optionSelect = currentText.textContent;
    currentText.textContent = e.target.textContent;
    e.target.textContent = optionText;
  });

  document.addEventListener('click', () => {
    currentSelect.classList.remove('active');
    optionSelect.classList.remove('active');
  })
}
selectHandle();