window.addEventListener('scroll', () => {
  const divDoFrame7 = document.getElementById('divdoframe7');
  const posicaoTop = divDoFrame7.getBoundingClientRect().top;
  const alturaTela = window.innerHeight;

  if (posicaoTop < alturaTela) {
    divDoFrame7.classList.add('aparecer');
  }
});


window.addEventListener('scroll', () => {
  const divContainer8 = document.getElementById('div-container8');
  const posicaoTop = divContainer8.getBoundingClientRect().top;
  const alturaTela = window.innerHeight;

  if (posicaoTop < alturaTela) {
    divContainer8.classList.add('aparecer');
  }
});

