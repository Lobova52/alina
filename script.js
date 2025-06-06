let count = 0;
const button = document.getElementById('clickBtn');
const counterDisplay = document.getElementById('counter');

button.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = 'Клики: ' + count;
  if (count % 10 === 0) {
    alert('Ты достиг ' + count + ' кликов!');
  }
});

// Анимация фона
setInterval(() => {
  document.body.style.backgroundColor = 
    'hsl(' + Math.floor(Math.random() * 360) + ', 70%, 80%)';
}, 1000);

