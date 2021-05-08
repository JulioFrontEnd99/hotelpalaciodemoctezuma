const panels = document.querySelectorAll('.panelglr');

panels.forEach((panelglr) => {
  panelglr.addEventListener('click', () =>{
    removeActiveClasses();
    panelglr.classList.add('active');
  });
});

function removeActiveClasses(){
  panels.forEach((panelglr) =>{
    panelglr.classList.remove('active');
  });
}
