//Menu interativo
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('open');
}

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('open');
}

let currentIndex = 0;
let hideArrowsTimeout;

document.addEventListener('DOMContentLoaded', () => {
    const galleries = document.querySelectorAll('.gallery-wrapper');

    galleries.forEach((gallery) => {
        let currentIndex = 0; // Índice de controle da galeria
        const container = gallery.querySelector('.photo-container');
        const arrows = gallery.querySelectorAll('.arrow');

        // Função para rolar a galeria
        function scrollGallery(direction) {
            const photoWidth = container.querySelector('.photo-item').offsetWidth;

            // Atualiza o índice com base na direção
            if (direction === 'left') {
                currentIndex = Math.max(currentIndex - 1, 0); // Não permite índice menor que 0
            } else if (direction === 'right') {
                currentIndex = Math.min(currentIndex + 1, container.children.length - 1); // Limita ao número de fotos
            }

            // Calcula a nova posição de rolagem
            const newScrollPosition = currentIndex * photoWidth;

            // Aplica o deslocamento com CSS transform
            container.style.transform = `translateX(-${newScrollPosition}px)`;
        }

        // Adiciona eventos às setas
        arrows.forEach((arrow) => {
            arrow.addEventListener('click', () => {
                const direction = arrow.classList.contains('left') ? 'left' : 'right';
                scrollGallery(direction);
            });
        });

        // Controle para esconder as setas
        let hideArrowsTimeout;

        function hideArrowsAfterDelay() {
            clearTimeout(hideArrowsTimeout);
            hideArrowsTimeout = setTimeout(() => {
                arrows.forEach((arrow) => {
                    arrow.classList.add('hidden');
                });
            }, 3000); // 3 segundos de inatividade
        }

        // Mostrar as setas ao passar o mouse
        gallery.addEventListener('mouseover', () => {
            clearTimeout(hideArrowsTimeout);
            arrows.forEach((arrow) => {
                arrow.classList.remove('hidden');
            });
        });

        // Esconde as setas ao sair da galeria
        gallery.addEventListener('mouseleave', hideArrowsAfterDelay);

        // Inicializa o temporizador para esconder as setas
        hideArrowsAfterDelay();
    });
});
