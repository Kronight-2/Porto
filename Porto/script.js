document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    const currentTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', currentTheme);

    themeToggleBtn.addEventListener('click', () => {
        let theme = htmlElement.getAttribute('data-theme');
        if (theme === 'dark') {
            theme = 'light';
        } else {
            theme = 'dark';
        }
        
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });

    const navLinks = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    function showSection(sectionId) {
        sections.forEach(sec => {
            sec.classList.remove('active-section');
        });

        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active-section');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    showSection('home');

    const tabBtns = document.querySelectorAll('.tab-btn');
    const workContent = document.getElementById('work-content');
    const eduContent = document.getElementById('education-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(t => t.classList.remove('active'));
            btn.classList.add('active');

            const target = btn.getAttribute('data-target');

            if (target === 'work') {
                workContent.style.display = 'block';
                eduContent.style.display = 'none';
            } else {
                workContent.style.display = 'none';
                eduContent.style.display = 'block';
            }
        });
    });
});