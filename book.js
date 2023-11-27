const bookedButton = document.getElementById('missed');
const openButton = document.getElementById('open');

const missedContent = document.getElementById('missed-content');
const openContent = document.getElementById('open-content');

bookedButton.addEventListener("click", bookedClick);
openButton.addEventListener("click", openClick);


function bookedClick() {
    bookedButton.classList.add('active-link', 'active');
    openButton.classList.remove('active-link', 'active');
    missedContent.hidden = false;
    openContent.hidden = true;
}

function openClick() {
    openButton.classList.add('active-link', 'active');
    bookedButton.classList.remove('active-link', 'active');
    openContent.hidden = false;
    missedContent.hidden = true;
}

function submitForm() {
    window.location.href = 'upload.html';
  }