function myWatch() {
  const watch = document.querySelector('.watch');
  let seconds = 0;
  let timer;

  function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  function startWatch() {
    watch.classList.remove('paused');
    timer = setInterval(() => {
      seconds++;
      watch.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
  }

  function stopWatch() {
    watch.classList.add('paused');
    clearInterval(timer);
  }

  function cleanWatch() {
    watch.classList.remove('paused');
    clearInterval(timer);
    watch.innerHTML = '00:00:00'
    seconds = 0;
  }

  document.addEventListener('click', (e) => {
    const element = e.target;

    if (element.classList.contains('start')) {
      startWatch();
    }

    if (element.classList.contains('stop')) {
      stopWatch();
    }

    if (element.classList.contains('clean')) {
      cleanWatch();
    }
  });
}

myWatch();