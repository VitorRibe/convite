(function(){
  // Menu mobile
  const menuBtn = document.getElementById('menuBtn');
  const menu = document.getElementById('menu');
  if(menuBtn && menu){
    menuBtn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    // Fecha o menu ao clicar em um link
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }));
  }

  // Portão de entrada + música
  const gate = document.getElementById('gate');
  const enterBtn = document.getElementById('enterBtn');
  const muteToggle = document.getElementById('muteToggle');
  const audio = document.getElementById('bgm');

  async function enter(){
    try{
      if(!muteToggle.checked && audio){
        await audio.play();
      }
    }catch(e){
      console.warn('Falha ao iniciar áudio:', e);
    }finally{
      if(gate) gate.style.display = 'none';
    }
  }

  if(enterBtn){
    enterBtn.addEventListener('click', enter);
  }

  // Copiar PIX
  const copyBtn = document.getElementById('copyPix');
  const pix = document.getElementById('pix');
  if(copyBtn && pix){
    copyBtn.addEventListener('click', async () => {
      try{
        await navigator.clipboard.writeText(pix.textContent.trim());
        copyBtn.textContent = 'Copiado!';
        setTimeout(()=> copyBtn.textContent = 'Copiar PIX', 1500);
      }catch(e){
        alert('Não foi possível copiar. Selecione e copie manualmente.');
      }
    });
  }

  // Ajuste: foco acessível nos atalhos de seção
  document.querySelectorAll('section, main').forEach(el => {
    el.setAttribute('tabindex','-1');
  });
})();
