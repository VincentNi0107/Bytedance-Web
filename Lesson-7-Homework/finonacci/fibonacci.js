function calculate() {
  let n = document.querySelector(".input").value;
  document.querySelector(".log").innerHTML = "waiting...";
  const now = Date.now();
  let gen = fib(n);
  const interval = setInterval(() => {
    let result = gen.next();
    if (result.done) {
      const costInMs = Date.now() - now;
      document.querySelector(".log").innerHTML = `Result: ${result.value} in ${costInMs}ms`;
      clearInterval(interval);
    }
  }, 16);
}

function *fib(n) {
  if (n == 0) {
    return 0;
  }
  else if (n < 3) {
    return 1;
  }
  else {
    let a = 1;
    let b = 1;
    while(n-- > 2) {
      for (let i = 100000000; i > 0; i--);
      b = a + b;
      a = b - a;
      yield;
    }
    return b;
  }
}