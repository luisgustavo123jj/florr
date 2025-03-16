document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia a la carta
    const card = document.querySelector('.card');
    const replayButton = document.getElementById('replay-button');
    
    // Agregar evento de clic a la carta para voltearla
    if (card) {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    }
    
    // Función para reiniciar la animación
    if (replayButton) {
        replayButton.addEventListener('click', function() {
            // Reiniciar todas las animaciones
            const flower = document.querySelector('.flower-container');
            const petals = document.querySelectorAll('.petal');
            const center = document.querySelector('.center');
            const stem = document.querySelector('.stem');
            const leaves = document.querySelectorAll('.leaf');
            const cardContainer = document.querySelector('.card-container');
            
            // Primero ocultamos todo
            flower.style.opacity = '0';
            cardContainer.style.height = '0';
            cardContainer.style.visibility = 'hidden';
            cardContainer.style.opacity = '0';
            
            // Forzar un reflow para que las animaciones se reinicien
            void flower.offsetWidth;
            void cardContainer.offsetWidth;
            
            // Eliminar estilos inline para que las animaciones se apliquen de nuevo
            setTimeout(function() {
                flower.removeAttribute('style');
                cardContainer.removeAttribute('style');
                
                // Reset card flip if it was flipped
                if (card.classList.contains('flipped')) {
                    card.classList.remove('flipped');
                }
            }, 100);
        });
    }
    
    // Asegurarse de que la carta sea clickeable
    console.log('Script loaded. Card clickable:', !!card);
});