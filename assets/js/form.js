document.addEventListener("DOMContentLoaded", function () {
    const showButtons = document.querySelectorAll('.show-button');
    const reservationSection = document.getElementById('reservationSection');

    function scrollToReservationSection() {
        reservationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    showButtons.forEach(button => {
        button.addEventListener('click', () => {
            const computedStyle = window.getComputedStyle(reservationSection);

            if (computedStyle.display === 'none') {
                reservationSection.style.display = 'block';
                scrollToReservationSection();
            } else {
                reservationSection.style.display = 'none';
            }
        });
    });

    
});


