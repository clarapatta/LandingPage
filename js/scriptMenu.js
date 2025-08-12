document.addEventListener('DOMContentLoaded', () => {

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const closeBtn = document.getElementById('sidebar-close-btn');
    const sidebarLinks = document.querySelectorAll('.sidebar__nav-link');

    if (!hamburgerBtn || !sidebar || !overlay || !closeBtn) return;

    const openMenu = () => {
        sidebar.classList.add('is-open');
        overlay.classList.add('is-open');
    };

    const closeMenu = () => {
        sidebar.classList.remove('is-open');
        overlay.classList.remove('is-open');
    };

    hamburgerBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});