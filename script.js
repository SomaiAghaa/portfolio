// 1. Testing Magnifying Lens Movement
const mouseLens = document.querySelector('.mouse-lens');
if (mouseLens) {
    window.addEventListener('mousemove', (e) => {
        mouseLens.style.left = e.clientX + 'px';
        mouseLens.style.top = e.clientY + 'px';
    });
}

// 2. Dark/Light Mode Toggle with FontAwesome Icons
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', currentTheme);
    darkModeToggle.innerHTML = currentTheme === 'light' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';

    darkModeToggle.addEventListener('click', () => {
        let theme = document.body.getAttribute('data-theme');
        if (theme === 'light') {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        } else {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    });
}

// 3. Certificates Modal Data & Functions
const certificatesData = {
    nti: { img: 'nti-ml.png', caption: 'NTI Machine Learning Training Program (120 Hours, Grade: 86.5%)' },
    cib: { img: 'cib-ai.png', caption: 'CIB Generative AI Summer Internship Certificate' },
    sprints: { img: 'sprints-testing.png', caption: 'Sprints x Microsoft Software Testing Program (2025)' },
    tcsc: { img: 'tcsc-ai.png', caption: 'TCSC Arab Open University / Cisco Modern AI Course' },
    iti: { img: 'iti-qa.png', caption: 'ITI Mahara-Tech Software Testing Concepts' },
    masr: { img: 'google-ai.png', caption: 'Google for Developers - Build with AI: MASR Edition' }
};

function openModal(certKey) {
    const modal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const cert = certificatesData[certKey];
    
    if (cert && modal && modalImage && modalCaption) {
        modalImage.src = cert.img;
        modalCaption.textContent = cert.caption;
        modal.style.display = 'flex';
    }
}

function closeModal() {
    const modal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('modalImage');
    if (modal) {
        modal.style.display = 'none';
        if (modalImage) modalImage.src = '';
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('certificateModal');
    if (event.target === modal) {
        closeModal();
    }
};

// 4. Download CV Action
const downloadCvBtn = document.getElementById('downloadCvBtn');
if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = "Somia'sCV.pdf";
        link.download = 'Somia_Rashad_QA_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}
