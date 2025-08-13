// Common JavaScript for San-A-Verf website
// Handles loading shared components, mobile menu toggling and dynamic year display

document.addEventListener('DOMContentLoaded', async () => {
  const loadFragment = async (id, file) => {
    const container = document.getElementById(id);
    if (container) {
      const resp = await fetch(file);
      container.innerHTML = await resp.text();
    }
  };

  await Promise.all([
    loadFragment('nav-placeholder', 'nav.html'),
    loadFragment('footer-placeholder', 'footer.html')
  ]);

  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
