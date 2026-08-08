document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('hamburger-btn');
    var nav = document.getElementById('nav-menu');
    if (btn && nav) {
        btn.addEventListener('click', function () {
            nav.classList.toggle('open');
        });
    }
});
