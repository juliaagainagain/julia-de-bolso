// Função para trocar entre abas
function switchTab(event, tabName) {
    event.preventDefault();

    // Esconde todas as seções
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Remove classe active de todos os items da sidebar
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
        item.classList.remove('active');
    });

    // Mostra a seção selecionada
    const activeSection = document.getElementById(tabName);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Adiciona classe active ao item clicado
    const clickedItem = event.currentTarget;
    if (clickedItem) {
        clickedItem.classList.add('active');
    }
}

// Inicializa ao carregar
document.addEventListener('DOMContentLoaded', function() {
    // Garante que a section home está ativa inicialmente
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.classList.add('active');
    }

    // Mobile sidebar menu: button near mac traffic lights toggles off-canvas sidebar.
    const macWindow = document.querySelector('.mac-window');
    const titlebar = document.querySelector('.mac-titlebar');
    const buttonGroup = document.querySelector('.mac-buttons');
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.mac-container');

    if (macWindow && titlebar && buttonGroup && sidebar && container) {
        const menuBtn = document.createElement('button');
        menuBtn.type = 'button';
        menuBtn.className = 'mobile-menu-btn';
        menuBtn.setAttribute('aria-label', 'Abrir menu lateral');
        menuBtn.textContent = '≡';
        buttonGroup.insertAdjacentElement('afterend', menuBtn);

        const scrim = document.createElement('button');
        scrim.type = 'button';
        scrim.className = 'sidebar-scrim';
        scrim.setAttribute('aria-label', 'Fechar menu lateral');
        container.appendChild(scrim);

        const closeMenu = () => macWindow.classList.remove('mobile-menu-open');
        const toggleMenu = () => macWindow.classList.toggle('mobile-menu-open');

        menuBtn.addEventListener('click', toggleMenu);
        scrim.addEventListener('click', closeMenu);

        sidebar.querySelectorAll('.sidebar-item').forEach((link) => {
            link.addEventListener('click', closeMenu);
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 760) {
                closeMenu();
            }
        });
    }

    // Notes accordion behavior: click or press Enter/Space to show/hide note text.
    const noteRows = document.querySelectorAll('.note-row');
    const closeAllRows = () => {
        noteRows.forEach((item) => {
            const itemText = item.querySelector('.note-full-text');
            const itemImage = item.querySelector('.note-inline-image');
            item.classList.remove('is-open');
            item.setAttribute('aria-expanded', 'false');
            if (itemText) {
                itemText.hidden = true;
            }
            if (itemImage) {
                itemImage.hidden = true;
            }
        });
    };

    // Prevent persisted browser state from leaving notes/images visible on load.
    closeAllRows();

    noteRows.forEach((row) => {
        const fullText = row.querySelector('.note-full-text');
        const inlineImage = row.querySelector('.note-inline-image');
        if (!fullText) {
            return;
        }

        const toggleRow = () => {
            const wasOpen = row.classList.contains('is-open');
            closeAllRows();

            if (!wasOpen) {
                row.classList.add('is-open');
                row.setAttribute('aria-expanded', 'true');
                fullText.hidden = false;
                if (inlineImage) {
                    inlineImage.hidden = false;
                }
            }
        };

        row.addEventListener('click', toggleRow);
        row.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleRow();
            }
        });
    });
});
