// Main JavaScript file
(function () {
  // smooth scroll
  scrollTo();

  // Sticky menu
  const section = document.getElementById('about');
  const nav = document.getElementById('js--sticky-nav');
  window.addEventListener('scroll', (event) => {
    const fromTop = window.scrollY;
    if (section.offsetTop <= fromTop) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });
}());

function scrollTo() {
  const links = document.querySelectorAll('.scrollTo');
  links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
  e.preventDefault();
  const targetID = respond ? respond.getAttribute('href') : this.getAttribute('href');
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);

  window.scrollBy({ top: originalTop - 150, left: 0, behavior: 'smooth' });
  const checkIfDone = setInterval(() => {
    const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = '-1';
      targetAnchor.focus();
      window.history.pushState('', '', targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}
