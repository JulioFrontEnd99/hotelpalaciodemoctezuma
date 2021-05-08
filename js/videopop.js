const playbtn=document.querySelector('.playbtn');
const video=document.querySelector('.vdo-contenedor');
const cerrar=document.querySelector('.cerrar');

playbtn.addEventListener('click',()=>{
  video.classList.add('mostrar');
})

  cerrar.addEventListener('click',()=>{
    video.classList.remove('mostrar');
  })
