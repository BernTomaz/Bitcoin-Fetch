export default function initAnimaNumros() {
  function animeNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start = start + incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 100 * Math.random());
    });
  }
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animeNumeros();
    }
  }
  const observeTagert = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observeTagert, { attributes: true });
}
