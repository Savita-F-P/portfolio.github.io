const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

const certificates = [
    { url: 'Images/Certificates/Q_A_B.jpg', title: 'Quatitative Aptitide Basics' },
    { url: 'Images/Certificates/S_S_I.jpg', title: 'Soft Skills for IT' },
    { url: 'Images/Certificates/Bootcamp.jpg', title: 'Zero to Hero: Code Smart with AI' },
    { url: 'Images/Certificates/SQL.jpg', title: 'Advance MySQL' },
    { url: 'Images/Certificates/F_S.jpg', title: 'Full Stack Development Level 1 Training Program' }
];

let currentCertIndex = 0;

const certImg = document.getElementById('certImg');
const certTitle = document.getElementById('certTitle');
const certPrev = document.getElementById('certPrev');
const certNext = document.getElementById('certNext');

function displayCertificate(index) {
    certImg.src = certificates[index].url;
    certTitle.textContent = certificates[index].title;
}

certPrev.addEventListener('click', () => {
    currentCertIndex = (currentCertIndex - 1 + certificates.length) % certificates.length;
    displayCertificate(currentCertIndex);
});

certNext.addEventListener('click', () => {
    currentCertIndex = (currentCertIndex + 1) % certificates.length;
    displayCertificate(currentCertIndex);
});

displayCertificate(currentCertIndex);

certImg.addEventListener('click', () => {
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('modalCertImg');
    modalImg.src = certImg.src;
    modal.classList.add('active');
});

const closeCert = document.getElementById('closeCert');
closeCert.addEventListener('click', () => {
    document.getElementById('certModal').classList.remove('active');
});

document.getElementById('certModal').addEventListener('click', (e) => {
    if (e.target.id === 'certModal') {
        document.getElementById('certModal').classList.remove('active');
    }
});

const viewCertBtns = document.querySelectorAll('.view-cert-btn');
viewCertBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const certUrl = btn.getAttribute('data-cert');
        const modal = document.getElementById('certModal');
        const modalImg = document.getElementById('modalCertImg');
        modalImg.src = certUrl;
        modal.classList.add('active');
    });
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    console.log('Form data:', data);

    contactForm.reset();

    document.getElementById('thankYouModal').classList.add('active');
});

const goHomeBtn = document.getElementById('goHomeBtn');
goHomeBtn.addEventListener('click', () => {
    document.getElementById('thankYouModal').classList.remove('active');
});
