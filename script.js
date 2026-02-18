document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Theme Toggle Functionality ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Cek preferensi lokal user jika ada
    const currentTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', currentTheme);

    themeToggleBtn.addEventListener('click', () => {
        let theme = htmlElement.getAttribute('data-theme');
        if (theme === 'dark') {
            theme = 'light';
        } else {
            theme = 'dark';
        }
        
        // Terapkan dan simpan preferensi
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });

    // --- 2. Navigation & Page Switching Logic ---
    const navLinks = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    // Fungsi untuk menampilkan halaman
    function showSection(sectionId) {
        // 1. Sembunyikan semua section (hapus class active-section)
        sections.forEach(sec => {
            sec.classList.remove('active-section');
        });

        // 2. Tampilkan section target (tambah class active-section)
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active-section');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah scroll default / lompat

            // A. Update UI Navbar (Pindah warna aktif)
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            // B. Ambil ID target dari href (misal: #home -> home)
            const targetId = this.getAttribute('href').substring(1);

            // C. Jalankan fungsi ganti halaman
            showSection(targetId);
        });
    });

    // --- Inisialisasi Awal ---
    // Pastikan halaman 'home' muncul saat website pertama dibuka
    showSection('home');

    // --- 3. Experience Tabs Switching ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const workContent = document.getElementById('work-content');
    const eduContent = document.getElementById('education-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Hapus active dari semua tab
            tabBtns.forEach(t => t.classList.remove('active'));
            // Tambah active ke tab yang diklik
            btn.classList.add('active');

            const target = btn.getAttribute('data-target');

            // Logika switching sederhana (bisa dibuat lebih dinamis jika banyak tab)
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