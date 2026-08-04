/* Lógica del menú de navegación móvil (Hamburguesa) */
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.querySelector('#nav-menu ul');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Opcional: Cerrar el menú automáticamente al hacer clic en cualquier enlace del menú en móvil
        const navLinks = document.querySelectorAll('#nav-menu ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});
