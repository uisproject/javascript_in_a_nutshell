const debounce = (callback, wait = 500) => {
  let timeoutId = null;

  return (...args) => {
    window.clearTimeout(timeoutId);

    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
};

const onInput = debounce((event) => console.log(event.target.value));

document.getElementById("input").addEventListener("input", onInput);
