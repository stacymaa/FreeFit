// открытие модального окна

function openModal() {
  document.getElementById("modal").style.top = "0px";
}

// закрытие модального окна - указываем top = -400px и окно "прячется" наверх за пределами страницы
function closeModal() {
  document.getElementById("modal").style.top = "-400px";
}
