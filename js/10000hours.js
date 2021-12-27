const openButton = document.querySelector('.modal-btn');
const closeButton = document.querySelector('.close-btn');
const startButton = document.querySelector('.start-btn');
const loading = document.querySelector('.loading');
const result = document.querySelector('.days');
const modal = document.querySelector('#modal');

function openModal() {
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

function calculator() {
  const fieldValue = document.querySelector('#field_value');
  let timeValue = document.querySelector('#time_value');
  let timeValue_int = Number(timeValue.value);

  const fieldResult = document.querySelector('.field_result');
  const timeResult = document.querySelector('.time_result');

  if (fieldValue.value == '') {
    alert('입력되지 않았습니다');
    fieldValue.focus();
    return false;
  } else if (timeValue.value == '') {
    alert('입력되지 않았습니다');
    timeValue.focus();
    return false;
  } else if (timeValue_int > 24) {
    alert('24 이하의 값을 적어주세요');
    return false;
  }
  result.style.display = 'none';
  loading.style.display = 'flex';

  setTimeout(function () {
    loading.style.display = 'none';
    result.style.display = 'flex';

    fieldResult.innerText = fieldValue.value;
    timeResult.innerText = parseInt(10000 / timeValue_int, 10);
  }, 1000);
}

openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
startButton.addEventListener('click', calculator);
