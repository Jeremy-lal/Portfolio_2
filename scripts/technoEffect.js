export function technoEffect() {

    function parallax(e) {
        const layers = document.querySelectorAll('.layer');
    
        layers.forEach(layer => {
          const speed = Number(layer.getAttribute('data-speed'));
    
          const x = (window.innerWidth - e.pageX * speed) / 100;
          const y = (window.innerHeight - e.pageY * speed) / 100;
    
          layer.style.transform = `translate(${x}px, ${y}px)`;
        });
      }
    
      document.addEventListener('mousemove', e => parallax(e));
}
