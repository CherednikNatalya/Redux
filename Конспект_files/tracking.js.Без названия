const events = [
  'mousemove',
  'mousedown',
  'resize',
  'keydown',
  'touchstart',
  'wheel',
];

function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

const postMessage =  debounce(() => window.parent.postMessage({ type: 'tracking', name: 'textbook' }, '*'));

for (let i = 0; i < events.length; i++) {
  window.addEventListener(events[i], postMessage);
}
