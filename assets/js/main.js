// VentoSail site interactions
(function () {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // Year in footer
  const y = new Date().getFullYear();
  const yEl = $('#year');
  if (yEl) yEl.textContent = y;

  // Carousel
  const carousel = $('.carousel');
  if (!carousel) return;

  const slidesWrap = $('.slides', carousel);
  const slides = $$('.slide', slidesWrap);
  const prevBtn = $('.prev', carousel);
  const nextBtn = $('.next', carousel);
  const dotsWrap = $('.dots', carousel);
  const interval = Number(carousel.getAttribute('data-interval')) || 5000; // default 5s

  let index = 0;
  let timer = null;

  // Build dots
  slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-label', `跳转到第 ${i + 1} 张`);
    b.addEventListener('click', () => go(i, true));
    dotsWrap.appendChild(b);
  });

  function update() {
    slidesWrap.style.transform = `translateX(-${index * 100}%)`;
    // aria-current for dots
    const dots = $$('.dots button', carousel);
    dots.forEach((d, i) => d.setAttribute('aria-current', String(i === index)));
  }

  function go(i, pause = false) {
    index = (i + slides.length) % slides.length;
    update();
    if (pause) restart();
  }

  function next() { go(index + 1); }
  function prev() { go(index - 1); }

  function restart() {
    stop();
    timer = setInterval(next, interval);
  }

  function stop() { if (timer) clearInterval(timer); }

  // Controls
  nextBtn.addEventListener('click', () => go(index + 1, true));
  prevBtn.addEventListener('click', () => go(index - 1, true));

  // Pause on hover (desktop)
  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', restart);

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') go(index + 1, true);
    if (e.key === 'ArrowLeft') go(index - 1, true);
  });

  // Init
  update();
  restart();
})();

