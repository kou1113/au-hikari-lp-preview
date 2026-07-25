const form = document.querySelector('#contact-form');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  window.alert('社内確認版のため、フォーム内容は送信されません。');
});
