const searchTrigger = document.querySelector('.search-trigger');
const modal = document.querySelector('.search-modal');
const closeSearch = document.querySelector('.close-search');
const searchInput = document.getElementById('searchInput');
const resultsBox = document.getElementById('searchResults');
const contentData = [
  { title: 'Sciences Department', type: 'department', description: 'Biology, Chemistry, Physics and applied lab learning.' },
  { title: 'STEM Hub', type: 'news', description: 'Robotics, digital literacy, and innovation week.' },
  { title: 'Mrs. Hellen Mwangi', type: 'staff', description: 'Principal and culture leader.' },
  { title: 'Graduation Ceremony', type: 'event', description: 'Community celebration and student achievements.' },
  { title: 'Admissions Window', type: 'news', description: 'Open online applications for the 2026 intake.' }
];

const openSearch = () => {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  searchInput.focus();
};
const closeModal = () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
};
searchTrigger?.addEventListener('click', openSearch);
closeSearch?.addEventListener('click', closeModal);
modal?.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
searchInput?.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();
  resultsBox.innerHTML = '';
  const filtered = contentData.filter(item => `${item.title} ${item.description}`.toLowerCase().includes(query));
  if (!filtered.length) {
    resultsBox.innerHTML = '<div class="result-item">No matching results found.</div>';
    return;
  }
  filtered.forEach(item => {
    const node = document.createElement('div');
    node.className = 'result-item';
    node.innerHTML = `<strong>${item.title}</strong><p>${item.type.toUpperCase()} · ${item.description}</p>`;
    resultsBox.appendChild(node);
  });
});

const counters = document.querySelectorAll('.counter');
const animateCounter = (counter) => {
  const target = Number(counter.dataset.target);
  let current = 0;
  const increment = Math.ceil(target / 60);
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      counter.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      counter.textContent = current.toLocaleString();
    }
  }, 20);
};
counters.forEach(animateCounter);

const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
  item.querySelector('.accordion-button')?.addEventListener('click', () => {
    const active = item.classList.contains('active');
    accordionItems.forEach(entry => entry.classList.remove('active'));
    if (!active) item.classList.add('active');
  });
});

const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
navToggle?.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

const themeToggle = document.querySelector('.theme-toggle');
themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

const closeAnnouncement = document.querySelector('.announcement-close');
closeAnnouncement?.addEventListener('click', () => {
  document.querySelector('.announcement-bar').style.display = 'none';
});

const scrollTop = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
  scrollTop.classList.toggle('show', window.scrollY > 320);
});
scrollTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const fallingContainer = document.querySelector('.falling-text-container');
const fallingCanvas = document.querySelector('.falling-text-canvas');
const fallingWords = document.querySelectorAll('.word');

const renderFallingCanvas = () => {
  if (!fallingCanvas || !fallingContainer) return;

  const ctx = fallingCanvas.getContext('2d');
  if (!ctx) return;

  const width = Math.max(320, fallingContainer.clientWidth);
  const height = Math.max(120, fallingContainer.clientHeight);

  fallingCanvas.width = width;
  fallingCanvas.height = height;

  ctx.clearRect(0, 0, width, height);
  const sparkles = Array.from({ length: 20 }, (_, idx) => ({
    x: width * (0.12 + idx * 0.038),
    y: height * (0.3 + (idx % 4) * 0.14),
    radius: 1.2 + Math.random() * 2.8,
    alpha: 0.22 + Math.random() * 0.48,
  }));

  sparkles.forEach((spark) => {
    ctx.beginPath();
    ctx.fillStyle = `rgba(90, 168, 255, ${spark.alpha})`;
    ctx.arc(spark.x, spark.y, spark.radius, 0, Math.PI * 2);
    ctx.fill();
  });
};

const launchFallingText = () => {
  fallingWords.forEach((word, index) => {
    word.classList.remove('is-falling');
    void word.offsetWidth;
    word.style.animationDelay = `${index * 45}ms`;
    word.classList.add('is-falling');
  });

  renderFallingCanvas();
};

fallingContainer?.addEventListener('mouseenter', launchFallingText);
fallingContainer?.addEventListener('click', launchFallingText);
window.addEventListener('resize', renderFallingCanvas);
renderFallingCanvas();

const countDownBox = document.querySelector('.countdown');
if (countDownBox) {
  const deadline = new Date(countDownBox.dataset.deadline).getTime();
  const updateCountdown = () => {
    const now = new Date().getTime();
    const diff = deadline - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    countDownBox.innerHTML = `<span>${days}d</span><span>${hours}h</span><span>${mins}m</span>`;
  };
  updateCountdown();
  setInterval(updateCountdown, 60000);
}
