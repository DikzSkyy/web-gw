const nav = document.querySelector
    ('.nav');
// ketika hamburger di klik //
document.querySelector('#ham').
    onclick = () => {
        nav.classList.toggle('active');
    };