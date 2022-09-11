const throttle = (callback, wait = 2000) => {
  let isBusy = false;
  let waitingArgs = null;

  const timoutFunc = () => {
    if (waitingArgs == null) {
      isBusy = false;
    } else {
      callback(...waitingArgs);
      waitingArgs = null;
      setTimeout(timoutFunc, wait);
    }
  };

  return (...args) => {
    if (isBusy) {
      waitingArgs = args;
      return;
    }
    callback(...args);
    isBusy = true;

    setTimeout(timoutFunc, wait);
  };
};

const onInput = throttle((event) => console.log(event.target.value));

document.getElementById("input").addEventListener("input", onInput);
