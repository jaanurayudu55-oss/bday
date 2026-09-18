/* ==========================================================================
   BIRTHDAY SURPRISE SCRIPT - 18 SEPTEMBER 2026
   Celebrant: BAAVAA ❤️
   Zero external dependencies | Pure Vanilla JavaScript
   ========================================================================== */

// --- 1. PERSONAL CONFIGURATION (EASY TO EDIT) ---
const CONFIG = {
  celebrantName: "BAAVAA ❤️",
  targetDate: new Date("2026-09-18T00:00:00").getTime(),
  
  // Personal message typed out in Section 4
  personalMessage: 
`Naa Priyamaina Baavaa ❤️,

Nuvvu naa life loki vachina tharvathe prathi kshanam intha andhamga, intha santhoshamga maarindhi. Ee roju normal day kaadhu... naa prapancham lo unna antha kante special person puttina roju!

Nuvvu chupinche care, nee pilla chesthalu, nannu navvinche nee jokes, nannu prathi kshanam safe ga chusukune nee premaki nenu eppatiki padipothune untanu. Naa badha ni kooda okka smile tho mayam cheyagaligina ore okkadu nuvve Baavaa. Nuvve naa pranam, naa strength, naa sweetest peace.

Nee ee birthday roju nenu korukunedhi okkate... nee face meedha ee navvu eppatiki ilage undali. Nuvvu anukune prathi dream nijamavali, neeku antha manchige jaragali. Nuvvu naa life lo undadam nenu chesukuna adrushtam.

Happy Birthday, My Love! Love you so much Baavaa ❤️`,

  // Secret letter in Section 7
  secretLetter: {
    salutation: "Naa Bangaram Baavaa 💌,",
    body: 
`Nijam cheppalante, janmalu anevi nijam ga unte, enni vandhala janmalu ettina nenu malli ninnene vethukuntu vasthanu. Endukante naa manasuki intha gattiga nachina vyakthi ee prapancham lo nuvvu thappa inkokaru leru.

Nenu em cheppina opikaga vine nee nature, nannu chinna pilla laga chusukune nee manasu, nannu ye kshanam lo kooda ontari ga anipinchani nee thodu... ivanni naaku pranam kante ekkuva.

Enni godavalu padda, enni jarigina... naa gundello nee meedha unna prema eppatiki thaggadhu, inka peruguthune untundhi. Naa prathi roju nee navvutho modalavali, nee thodutho gadavali.

Happy Birthday, Naa Gundekaya! Nuvvu eppudu santhoshamga, arogyamga, navvuthu undali ani aa devudini manasara korukuntunna.`,
    signoff: "Forever and ever yours,\nNee Bangaram ❤️"
  },

  // Gallery items (mapped to images/photo1.png ... photo10.png)
  gallery: [
    {
      src: "images/photo1.png",
      caption: "My handsome rider & coolest partner in crime 🏍️✨"
    },
    {
      src: "images/photo2.png",
      caption: "That smile that melts my heart every single time 🌿❤️"
    },
    {
      src: "images/photo3.jpg",
      caption: "Walking through life with you is my favorite journey 🌊🕶️"
    },
    {
      src: "images/photo4.png",
      caption: "Shining brighter than all the city lights combined 🌃💫"
    },
    {
      src: "images/photo5.png",
      caption: "My peace, my rock, my forever favorite human 🪨🤍"
    },
    {
      src: "images/photo6.png",
      caption: "Always looking dashing on your ride 🏍️🔥"
    },
    {
      src: "images/photo7.png",
      caption: "Effortlessly stylish in every single moment 😎✨"
    },
    {
      src: "images/photo8.png",
      caption: "Standing together, forever hand in hand 👫❤️"
    },
    {
      src: "images/photo9.png",
      caption: "Every view is breathtaking when you're next to me 🌊🥰"
    },
    {
      src: "images/photo10.png",
      caption: "You and me, a beautiful love story forever 🎨💑"
    },
    {
      src: "images/photo11.png",
      caption: "My favorite smile in the whole world, right next to mine 🥰❤️"
    },
    {
      src: "images/photo12.jpg",
      caption: "You & Me, our eyes only for each other 🌴✨❤️"
    }
  ]
};

// ==========================================================================
// 2. AMBIENT PARTICLES & FLOATING HEARTS CANVAS ENGINE
// ==========================================================================
class StarfieldEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.stars = [];
    this.floatingHearts = [];
    this.numStars = window.innerWidth < 768 ? 65 : 120;
    this.numHearts = window.innerWidth < 768 ? 10 : 20;
    
    this.init();
    this.bindEvents();
    this.animate();
  }

  init() {
    this.resize();
    this.stars = [];
    for (let i = 0; i < this.numStars; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 1.8 + 0.5,
        alpha: Math.random(),
        speed: Math.random() * 0.015 + 0.005,
        color: Math.random() > 0.4 ? '#ffd166' : '#ffffff'
      });
    }

    this.floatingHearts = [];
    for (let i = 0; i < this.numHearts; i++) {
      this.floatingHearts.push(this.createHeart(true));
    }
  }

  createHeart(initial = false) {
    return {
      x: Math.random() * this.width,
      y: initial ? Math.random() * this.height : this.height + 20,
      size: Math.random() * 10 + 8,
      speedY: Math.random() * 0.7 + 0.3,
      speedX: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.4 + 0.15,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.02
    };
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  bindEvents() {
    window.addEventListener('resize', () => this.resize());
  }

  drawHeart(x, y, size, color, opacity, rotation) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.globalAlpha = opacity;
    ctx.fillStyle = color;
    ctx.beginPath();
    const d = size;
    ctx.moveTo(0, d / 4);
    ctx.quadraticCurveTo(0, 0, d / 4, 0);
    ctx.quadraticCurveTo(d / 2, 0, d / 2, d / 3);
    ctx.quadraticCurveTo(d / 2, 0, (d * 3) / 4, 0);
    ctx.quadraticCurveTo(d, 0, d, d / 4);
    ctx.quadraticCurveTo(d, d / 2, (d * 3) / 4, (d * 3) / 4);
    ctx.lineTo(d / 2, d);
    ctx.lineTo(d / 4, (d * 3) / 4);
    ctx.quadraticCurveTo(0, d / 2, 0, d / 4);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Draw stars
    for (const star of this.stars) {
      star.alpha += star.speed;
      const currentAlpha = Math.abs(Math.sin(star.alpha));
      this.ctx.fillStyle = star.color;
      this.ctx.globalAlpha = currentAlpha * 0.85;
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // Draw drifting hearts
    for (let i = 0; i < this.floatingHearts.length; i++) {
      const h = this.floatingHearts[i];
      h.y -= h.speedY;
      h.x += h.speedX;
      h.rotation += h.rotSpeed;

      this.drawHeart(h.x, h.y, h.size, '#ff4d6d', h.opacity, h.rotation);

      if (h.y < -30 || h.x < -30 || h.x > this.width + 30) {
        this.floatingHearts[i] = this.createHeart(false);
      }
    }

    this.ctx.globalAlpha = 1;
    requestAnimationFrame(() => this.animate());
  }
}

// ==========================================================================
// 3. CONFETTI BURST ENGINE
// ==========================================================================
class ConfettiEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.colors = ['#ffd166', '#ff4d6d', '#ff758f', '#ffb703', '#3a86ff', '#8338ec', '#ffffff'];
    this.running = false;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(originX = window.innerWidth / 2, originY = window.innerHeight / 2, count = 120) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 12 + 6;
      this.particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 3,
        size: Math.random() * 8 + 5,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.25,
        drag: 0.96,
        gravity: 0.25,
        opacity: 1,
        fadeSpeed: Math.random() * 0.01 + 0.005,
        type: Math.random() > 0.4 ? 'rect' : 'circle'
      });
    }

    if (!this.running) {
      this.running = true;
      this.render();
    }
  }

  render() {
    if (this.particles.length === 0) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.running = false;
      return;
    }

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= p.drag;
      p.vy = p.vy * p.drag + p.gravity;
      p.rotation += p.rotSpeed;
      p.opacity -= p.fadeSpeed;

      if (p.opacity <= 0 || p.y > this.canvas.height) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);
      this.ctx.globalAlpha = p.opacity;
      this.ctx.fillStyle = p.color;

      if (p.type === 'rect') {
        this.ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      } else {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
      }
      this.ctx.restore();
    }

    requestAnimationFrame(() => this.render());
  }
}

// ==========================================================================
// 4. FIREWORKS ENGINE (FOR GRAND FINALE)
// ==========================================================================
class FireworksEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.fireworks = [];
    this.particles = [];
    this.active = false;
    this.timer = null;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  start(durationSeconds = 6) {
    this.active = true;
    this.canvas.style.pointerEvents = 'none';

    const colors = [
      '#ffd166', '#ff4d6d', '#ff758f', '#06d6a0', '#118ab2', '#ffb703', '#e0aaff', '#ffffff'
    ];

    // Instant multi-burst across the screen with zero delay!
    for (let i = 0; i < 6; i++) {
      const x = (0.15 + Math.random() * 0.7) * this.canvas.width;
      const y = (0.15 + Math.random() * 0.4) * this.canvas.height;
      const c = colors[Math.floor(Math.random() * colors.length)];
      this.explode(x, y, c);
    }

    // Gentle continuing bursts
    const launchInterval = setInterval(() => {
      if (!this.active) {
        clearInterval(launchInterval);
        return;
      }
      const x = (0.15 + Math.random() * 0.7) * this.canvas.width;
      const y = (0.15 + Math.random() * 0.4) * this.canvas.height;
      const c = colors[Math.floor(Math.random() * colors.length)];
      this.explode(x, y, c);
    }, 300);

    this.render();

    setTimeout(() => {
      this.active = false;
      clearInterval(launchInterval);
    }, durationSeconds * 1000);
  }

  explode(x, y, baseColor) {
    const count = 75;
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 2;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: baseColor,
        alpha: 1,
        decay: Math.random() * 0.02 + 0.012,
        gravity: 0.12,
        size: Math.random() * 2.5 + 2
      });
    }
  }

  render() {
    // Clear transparently so website text remains completely bright and readable
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Update sparks
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.98;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.alpha);
      this.ctx.fillStyle = p.color;
      this.ctx.shadowBlur = 6;
      this.ctx.shadowColor = p.color;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size || 2.5, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }

    if (this.active || this.particles.length > 0) {
      requestAnimationFrame(() => this.render());
    } else {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

// ==========================================================================
// 5. DUAL-TRACK BACKGROUND AUDIO DIRECTOR
// ==========================================================================
class BackgroundAudioDirector {
  constructor() {
    this.audioMain = document.getElementById('audio-main');       // "Uppenantha ee premaki.mpeg"
    this.audioGallery = document.getElementById('audio-gallery'); // "Ee manase ee ee.mpeg"
    this.floatingBar = document.getElementById('floating-music-bar');
    this.floatingBtn = document.getElementById('floating-music-btn');
    this.trackTitle = document.getElementById('floating-track-title');
    this.soundBars = document.getElementById('floating-sound-bars');

    this.isPlaying = false;
    this.isInGallery = false;
    this.fadeInterval = null;

    this.init();
  }

  init() {
    // Initial volumes
    if (this.audioMain) this.audioMain.volume = 0.85;
    if (this.audioGallery) this.audioGallery.volume = 0;

    // Toggle button listener
    if (this.floatingBtn) {
      this.floatingBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggle();
      });
    }

    if (this.floatingBar) {
      this.floatingBar.addEventListener('click', () => {
        this.toggle();
      });
    }

    // Set up Photo Gallery observer for contextual audio switching
    this.setupGalleryObserver();
  }

  setupGalleryObserver() {
    const gallery = document.getElementById('memory-gallery-section');
    const lightbox = document.getElementById('lightbox-modal');

    if (gallery && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const inView = entry.isIntersecting || (lightbox && lightbox.classList.contains('active'));
          this.handleGalleryStateChange(inView);
        });
      }, {
        threshold: 0.12
      });

      observer.observe(gallery);
    }

    // Also observe Lightbox Modal state
    if (lightbox) {
      const lightboxObserver = new MutationObserver(() => {
        const isLightboxActive = lightbox.classList.contains('active');
        if (isLightboxActive) {
          this.handleGalleryStateChange(true);
        } else if (gallery) {
          const rect = gallery.getBoundingClientRect();
          const inView = (rect.top < window.innerHeight * 0.85) && (rect.bottom > window.innerHeight * 0.15);
          this.handleGalleryStateChange(inView);
        }
      });
      lightboxObserver.observe(lightbox, { attributes: true, attributeFilter: ['class'] });
    }
  }

  handleGalleryStateChange(inGallery) {
    // If the finale surprise was opened, stay exclusively on Ee Manase Ee Ee!
    if (this.isFinaleActive) return;

    if (this.isInGallery === inGallery) return;
    this.isInGallery = inGallery;

    if (!this.isPlaying) {
      this.updateUI();
      return;
    }

    this.crossfade();
  }

  playFinaleAudio() {
    this.isFinaleActive = true;
    this.isInGallery = true;
    this.isPlaying = true;

    if (this.fadeInterval) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }

    if (this.audioMain) {
      this.audioMain.pause();
      this.audioMain.volume = 0;
    }

    if (this.audioGallery) {
      this.audioGallery.currentTime = 0;
      this.audioGallery.volume = 0.9;
      this.audioGallery.play().catch(err => console.warn(err));
    }

    this.updateUI();
  }

  crossfade() {
    const targetPlay = this.isInGallery ? this.audioGallery : this.audioMain;
    const targetFade = this.isInGallery ? this.audioMain : this.audioGallery;

    if (!targetPlay || !targetFade) return;

    this.updateUI();

    try {
      if (targetPlay.paused) {
        targetPlay.currentTime = targetPlay.currentTime || 0;
        targetPlay.volume = 0;
        targetPlay.play().catch(e => console.warn(e));
      }
    } catch (e) {}

    if (this.fadeInterval) clearInterval(this.fadeInterval);

    const steps = 20;
    const duration = 750;
    const stepTime = duration / steps;
    let currentStep = 0;

    const startFadeVol = targetFade.volume;
    const targetVol = 0.85;

    this.fadeInterval = setInterval(() => {
      currentStep++;
      const factor = currentStep / steps;

      targetFade.volume = Math.max(0, startFadeVol * (1 - factor));
      targetPlay.volume = Math.min(targetVol, targetVol * factor);

      if (currentStep >= steps) {
        clearInterval(this.fadeInterval);
        this.fadeInterval = null;
        targetFade.pause();
        targetFade.volume = 0;
        targetPlay.volume = targetVol;
      }
    }, stepTime);
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    this.isPlaying = true;
    const activeAudio = this.isInGallery ? this.audioGallery : this.audioMain;
    const inactiveAudio = this.isInGallery ? this.audioMain : this.audioGallery;

    if (inactiveAudio) {
      inactiveAudio.pause();
      inactiveAudio.volume = 0;
    }

    if (activeAudio) {
      activeAudio.volume = 0.85;
      activeAudio.play().catch(err => {
        console.warn("Audio play error:", err);
      });
    }

    this.updateUI();
  }

  pause() {
    this.isPlaying = false;
    if (this.fadeInterval) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }
    if (this.audioMain) this.audioMain.pause();
    if (this.audioGallery) this.audioGallery.pause();
    this.updateUI();
  }

  updateUI() {
    const currentTitle = this.isInGallery ? "🎵 Ee Manase Ee Ee" : "🎵 Uppenantha Ee Premaki";
    if (this.trackTitle) this.trackTitle.textContent = currentTitle;

    if (this.floatingBtn) {
      if (this.isPlaying) {
        this.floatingBtn.classList.add('playing');
        this.floatingBtn.setAttribute('title', 'Pause Music');
      } else {
        this.floatingBtn.classList.remove('playing');
        this.floatingBtn.setAttribute('title', 'Play Music');
      }
    }

    if (this.soundBars) {
      if (this.isPlaying) {
        this.soundBars.classList.add('active');
      } else {
        this.soundBars.classList.remove('active');
      }
    }
  }
}

// ==========================================================================
// 6. MAIN APPLICATION LOGIC
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Background Canvases
  const starfield = new StarfieldEngine('star-canvas');
  const confetti = new ConfettiEngine('confetti-canvas');
  const fireworks = new FireworksEngine('fireworks-canvas');
  const player = new BackgroundAudioDirector();

  // ------------------------------------------------------------------------
  // Section 1: Welcome Screen Transition
  // ------------------------------------------------------------------------
  const welcomeScreen = document.getElementById('welcome-screen');
  const openSurpriseBtn = document.getElementById('open-surprise-btn');

  if (openSurpriseBtn && welcomeScreen) {
    openSurpriseBtn.addEventListener('click', () => {
      welcomeScreen.classList.add('hidden');
      // Start background music automatically on user interaction
      if (!player.isPlaying) {
        player.play();
      }

      // Gentle confetti greeting
      confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 70);
      
      setTimeout(() => {
        const giftSection = document.getElementById('gift-section');
        if (giftSection) {
          giftSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    });
  }

  // ------------------------------------------------------------------------
  // Section 2: Surprise Gift Opening
  // ------------------------------------------------------------------------
  const giftBox = document.getElementById('interactive-gift-box');
  let giftOpened = false;

  if (giftBox) {
    giftBox.addEventListener('click', (e) => {
      if (giftOpened) return;
      giftOpened = true;
      
      giftBox.classList.add('opened');
      giftBox.classList.remove('float-anim');

      const rect = giftBox.getBoundingClientRect();
      const originX = rect.left + rect.width / 2;
      const originY = rect.top + rect.height / 2;

      // Multi-layer confetti blast!
      confetti.burst(originX, originY, 150);
      setTimeout(() => confetti.burst(originX - 100, originY - 50, 80), 300);
      setTimeout(() => confetti.burst(originX + 100, originY - 50, 80), 600);

      // Play music if not already started
      if (!player.isPlaying) {
        player.play();
      }

      // Smooth scroll to Main Birthday Hero
      setTimeout(() => {
        const heroSection = document.getElementById('hero-section');
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1600);
    });
  }

  // ------------------------------------------------------------------------
  // Section 3: 18th September Special Day Badge
  // ------------------------------------------------------------------------
  const specialCard = document.querySelector('.special-day-container');
  if (specialCard) {
    specialCard.addEventListener('click', () => {
      confetti.burst(window.innerWidth / 2, window.innerHeight / 3, 70);
    });
  }

  // ------------------------------------------------------------------------
  // Section 4: Personal Message Typing Animation
  // ------------------------------------------------------------------------
  const typedEl = document.getElementById('typed-personal-message');
  const replayTypingBtn = document.getElementById('replay-typing-btn');
  let typingInProgress = false;
  let typingTimeout = null;

  function startTypingMessage() {
    if (!typedEl || typingInProgress) return;
    typingInProgress = true;
    typedEl.textContent = '';
    
    const text = CONFIG.personalMessage;
    let charIndex = 0;

    function typeNextChar() {
      if (charIndex < text.length) {
        typedEl.textContent += text.charAt(charIndex);
        charIndex++;
        const delay = text.charAt(charIndex - 1) === '\n' ? 280 : (Math.random() * 25 + 20);
        typingTimeout = setTimeout(typeNextChar, delay);
      } else {
        typingInProgress = false;
      }
    }

    typeNextChar();
  }

  if (replayTypingBtn) {
    replayTypingBtn.addEventListener('click', () => {
      if (typingTimeout) clearTimeout(typingTimeout);
      typingInProgress = false;
      startTypingMessage();
    });
  }

  // Trigger typing once message section is scrolled into view
  const messageCard = document.querySelector('.message-card');
  if (messageCard) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !typedEl.textContent) {
          startTypingMessage();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(messageCard);
  }

  // ------------------------------------------------------------------------
  // Section 5: 3D Tilt Effect on Reason Cards
  // ------------------------------------------------------------------------
  const cards = document.querySelectorAll('.reason-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 12;
      const rotateY = (x / rect.width) * 12;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ------------------------------------------------------------------------
  // Section 6: Polaroid Memory Gallery & Lightbox
  // ------------------------------------------------------------------------
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  let currentGalleryIndex = 0;

  function openLightbox(index) {
    if (!CONFIG.gallery[index]) return;
    currentGalleryIndex = index;
    const item = CONFIG.gallery[index];
    lightboxImg.src = item.src;
    lightboxCaption.textContent = item.caption;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function nextLightbox() {
    currentGalleryIndex = (currentGalleryIndex + 1) % CONFIG.gallery.length;
    openLightbox(currentGalleryIndex);
  }

  function prevLightbox() {
    currentGalleryIndex = (currentGalleryIndex - 1 + CONFIG.gallery.length) % CONFIG.gallery.length;
    openLightbox(currentGalleryIndex);
  }

  document.querySelectorAll('.polaroid-card').forEach((card) => {
    card.addEventListener('click', () => {
      const index = parseInt(card.getAttribute('data-index'), 10);
      openLightbox(index);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', nextLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevLightbox);

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
  });

  // ------------------------------------------------------------------------
  // Section 7: Secret Letter Envelope
  // ------------------------------------------------------------------------
  const envelope = document.getElementById('secret-envelope');
  const letterModal = document.getElementById('letter-modal-reveal');

  if (envelope) {
    envelope.addEventListener('click', () => {
      envelope.classList.toggle('open');
      if (envelope.classList.contains('open')) {
        confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 60);
        if (letterModal) {
          setTimeout(() => {
            letterModal.classList.add('visible');
            letterModal.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 600);
        }
      } else {
        if (letterModal) letterModal.classList.remove('visible');
      }
    });
  }

  // ------------------------------------------------------------------------
  // Section 9: Final Surprise Interaction
  // ------------------------------------------------------------------------
  const triggerFinaleBtn = document.getElementById('trigger-finale-btn');
  const finaleRevealed = document.getElementById('finale-revealed');
  const finalePre = document.getElementById('finale-pre');

  if (triggerFinaleBtn) {
    triggerFinaleBtn.addEventListener('click', () => {
      // Switch audio immediately to ONLY "Ee Manase Ee Ee" for the grand finale!
      if (player) {
        player.playFinaleAudio();
      }

      // Instant vibrant fireworks bursts across the screen!
      fireworks.start(8);

      // Instant celebratory confetti bursts!
      confetti.burst(window.innerWidth * 0.3, window.innerHeight * 0.35, 120);
      confetti.burst(window.innerWidth * 0.7, window.innerHeight * 0.35, 120);
      confetti.burst(window.innerWidth / 2, window.innerHeight * 0.25, 160);

      // Instantly show the revealed birthday message
      if (finalePre) finalePre.style.display = 'none';
      if (finaleRevealed) {
        finaleRevealed.classList.add('active');
        finaleRevealed.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }
});
