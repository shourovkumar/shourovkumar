// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
  mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileMenuBtn.querySelector('i').classList.add('fa-bars');
    mobileMenuBtn.querySelector('i').classList.remove('fa-times');
  });
});

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
    // In a real implementation, you would filter the portfolio items here
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  });
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.padding = '10px 0';
    header.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.padding = '15px 0';
    header.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
  }
});
