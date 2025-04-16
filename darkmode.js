//Declaring 
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const toggleText = darkModeToggle.querySelector('.text');
const toggleIcon = darkModeToggle.querySelector('.icon');

//enable darkmode if true
if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
}

//check if darkmode button as been clicked
darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});
//enable darkmode 
function enableDarkMode() {
    body.classList.add('dark-mode');
    toggleText.textContent = 'Light Mode';
    localStorage.setItem('darkMode', 'enabled');
}
//disable dark mode
function disableDarkMode() {
    body.classList.remove('dark-mode');
    toggleText.textContent = 'Dark Mode';
    localStorage.setItem('darkMode', null);
}