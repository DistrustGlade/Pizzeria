document.addEventListener('DOMContentLoaded', function () {
    let darkmode = document.querySelector('#darkmode');
    let darkmodeToggle = document.querySelector('#darkmode-toggle'); // Define darkmodeToggle

    darkmodeToggle.addEventListener('click', () => {
        toggleDarkMode();
    });

    darkmode.onclick = () => {
        if (darkmode.classList.contains('bx-moon')) {
            darkmode.classList.replace('bx-moon', 'bx-sun');
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            darkmode.classList.replace('bx-sun', 'bx-moon');
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    };
});
