// Certificate Modal Functionality
const modal = document.getElementById('certificateModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');

const certificatesData = {
    nti: {
        img: 'nti-ml.png',
        caption: 'NTI Machine Learning Training Program (120 Hours, Grade: 86.5%)'
    },
    cib: {
        img: 'cib-ai.png',
        caption: 'CIB Generative AI Summer Internship Certificate'
    },
    sprints: {
        img: 'sprints-testing.png',
        caption: 'Sprints x Microsoft Software Testing Program (2025)'
    },
    tcsc: {
        img: 'tcsc-ai.png',
        caption: 'TCSC Arab Open University / Cisco Modern AI Course'
    },
    iti: {
        img: 'iti-qa.png',
        caption: 'ITI Mahara-Tech Software Testing Concepts'
    },
    masr: {
        img: 'google-ai.png',
        caption: 'Google for Developers - Build with AI: MASR Edition'
    }
};

function openModal(certKey) {
    const cert = certificatesData[certKey];
    if (cert) {
        modalImage.src = cert.img;
        modalCaption.textContent = cert.caption;
        modal.style.display = 'flex';
    }
}

function closeModal() {
    modal.style.display = 'none';
    modalImage.src = '';
}

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

// Dark/Light Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const currentTheme = localStorage.getItem('theme') || 'dark';

if (currentTheme === 'light') {
    document.body.setAttribute('data-theme', 'light');
    darkModeToggle.textContent = '🌙';
} else {
    document.body.setAttribute('data-theme', 'dark');
    darkModeToggle.textContent = '☀️';
}

darkModeToggle.addEventListener('click', () => {
    let theme = document.body.getAttribute('data-theme');
    if (theme === 'light') {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkModeToggle.textContent = '☀️';
    } else {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        darkModeToggle.textContent = '🌙';
    }
});

// Download CV Action (يقوم بتحميل ملف الـ PDF مباشرة)
const downloadCvBtn = document.getElementById('downloadCvBtn');
downloadCvBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'SomiasCV.pdf'; // تأكدي أن ملف الـ PDF مرفوع بنفس هذا الاسم في المستودع
    link.download = 'Somia_Rashad_QA_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    contactForm.reset();
});
