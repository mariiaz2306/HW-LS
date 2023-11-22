



const nav = document.querySelector('nav');
const buttonTheme = document.querySelector('#change-theme');
const currentTheme = localStorage.getItem('theme');

buttonTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDarkTheme = document.body.classList.contains('dark-theme');

    updateButton(isDarkTheme);
    localStorage.setItem('theme', isDarkTheme ? 'dark-theme' : '');
});

function updateButton(isDarkTheme) {
    try {
        const button = document.querySelector('#change-theme');
        const themeAttribute = isDarkTheme ? 'dark' : 'light';
        const imageName = isDarkTheme ? 'day&night.svg' : 'button day.svg';
        button.dataset.theme = themeAttribute;
        button.innerHTML = `<img src="${imageName}" alt="day&night mode">`;
        button.style.backgroundColor = isDarkTheme ? 'transparent' : '';
    } catch (error) {
        console.log(error);
    }
}


updateButton(document.body.classList.contains('dark-theme'));


