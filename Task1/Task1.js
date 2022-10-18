const btn = document.querySelector('.button_task');

btn.addEventListener('click', () => {
  btn.classList.toggle('icon_change');
  btn.classList.toggle('icon_change_2');
});
