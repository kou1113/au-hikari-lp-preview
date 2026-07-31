const form = document.querySelector('#contact-form');
const stickyCta = document.querySelector('.sticky-cta');
const mobileViewport = window.matchMedia('(max-width: 800px)');

const updateStickyCta = () => {
  if (!stickyCta) return;

  const shouldShow = mobileViewport.matches;
  stickyCta.classList.toggle('is-visible', shouldShow);
  stickyCta.setAttribute('aria-hidden', String(!shouldShow));
};

updateStickyCta();
mobileViewport.addEventListener?.('change', updateStickyCta);

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const pattern = new URLSearchParams(window.location.search).get('pattern');
  window.location.href = pattern === '1' ? 'thanks.html?pattern=1' : 'thanks.html';
});
