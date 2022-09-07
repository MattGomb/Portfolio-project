// eslint-disable-next-line no-unused-vars
function closeMenu() {
  document.getElementById('myButtons').style.display = 'none';
  var blur = document.getElementById('blur');
  blur.classList.toggle('active')
}

// eslint-disable-next-line no-unused-vars
function openMenu() {
  document.getElementById('myButtons').style.display = 'block';
  var blur = document.getElementById('blur');
  blur.classList.toggle('active')
}