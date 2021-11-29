
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const body = document.getElementsByTagName("body")[0];


function switchTheme(e) {
  if (e.target.checked) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);
