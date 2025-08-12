document.addEventListener('DOMContentLoaded', () => {
    
    const header = document.querySelector('.header');
    const mainContent = document.querySelector('main');

    function adjustMainContentPadding() {
        if (!header || !mainContent) return;

        const headerHeight = header.offsetHeight;
        mainContent.style.paddingTop = `${headerHeight}px`;
    }

    adjustMainContentPadding();
    window.addEventListener('resize', adjustMainContentPadding);
});