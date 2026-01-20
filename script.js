AOS.init({ duration: 900, easing: 'ease-out-cubic', once: true });

// Mobile menu
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('hamburger').classList.toggle('active');
    document.getElementById('mobileMenu').classList.toggle('active');
});

// Copy IP
function copyIp(ip) {
    navigator.clipboard.writeText(ip).then(() => {
        const toast = document.getElementById('toast');
        toast.innerHTML = `<i class="fa-solid fa-check-circle"></i> IP Copied: ${ip}`;
        toast.classList.add('active');
        setTimeout(() => toast.classList.remove('active'), 3000);
    });
}

// Parallax on character (desktop only)
document.addEventListener('mousemove', e => {
    if (window.innerWidth > 1024) {
        const img = document.getElementById('characterImg');
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
        img.style.transform = `translate(${x}px, ${y}px)`;
    }
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    document.getElementById('navbar').style.boxShadow = 
        window.scrollY > 50 ? '0 10px 30px rgba(244,63,122,0.15)' : 'none';
});
