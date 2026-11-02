//! Client-side Interactions - Ajmeer Luxury Motors

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.createElement('button');
  hamburger.className = 'hamburger';
  hamburger.setAttribute('aria-label', 'Open main navigation');
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  
  // Insert hamburger into navbar
  const container = document.querySelector('.navbar .container');
  if (container && window.innerWidth <= 768) {
    container.insertBefore(hamburger, navLinks);
    
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  }
  
  // Close mobile menu when a link is clicked
  const navAnchors = navLinks.querySelectorAll('a');
  navAnchors.forEach(anchor => {
    anchor.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('open');
        navLinks.style.pointerEvents = 'none';
        navLinks.style.visibility = 'hidden';
      }
    });
  });
  
  // Header scroll effect
  let lastScroll = 0;
  const header = document.querySelector('.navbar');
  
  if (header) {
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
      } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
      }
      
      lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    }, { passive: true });
  }
  
  // Intersection Observer for section animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe all sections for reveal animation
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 600ms var(--transition-slow), transform 600ms var(--transition-slow)';
    observer.observe(section);
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Form submission feedback
  const enquiryForm = document.querySelector('.enquiry-form');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Submitted!';
      submitBtn.style.background = 'var(--accent-primary)';
      
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        this.reset();
      }, 3000);
    });
  }
  
  // Gallery image hover enhancement
  const galleryImages = document.querySelectorAll('.gallery-image');
  galleryImages.forEach(img => {
    img.addEventListener('mouseenter', function() {
      this.style.transition = 'transform 500ms var(--transition-slow)';
      this.style.transform = 'scale(1.05)';
    });
    img.addEventListener('mouseleave', function() {
      this.style.transition = 'transform 500ms var(--transition-slow)';
      this.style.transform = 'scale(1)';
    });
  });
  
  // Exterior image hover enhancement
  const exteriorImages = document.querySelectorAll('.exterior-image');
  exteriorImages.forEach(img => {
    img.addEventListener('mouseenter', function() {
      this.style.transition = 'transform 500ms var(--transition-slow)';
      this.style.transform = 'scale(1.05)';
    });
    img.addEventListener('mouseleave', function() {
      this.style.transition = 'transform 500ms var(--transition-slow)';
      this.style.transform = 'scale(1)';
    });
  });
  
  // Counter animation for hero (optional visual enhancement)
  const observer2 = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const avatar = entry.target.querySelector('.hero-avatar');
        if (avatar) {
          avatar.style.transition = 'border-color 300ms';
        }
      }
    });
  }, { threshold: 0.5 });
  
  const heroSection = document.querySelector('#hero');
  if (heroSection) {
    observer2.observe(heroSection);
  }
});