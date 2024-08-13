const form = document.getElementById('reservationForm');
const reservationsList = document.getElementById('reservationsList');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const partySize = document.getElementById('partySize').value;

    const response = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, date, partySize }),
    });

    if (response.ok) {
        form.reset();
        loadReservations();
    }
});

async function loadReservations() {
    const response = await fetch('http://localhost:5000/api/reservations');
    const reservations = await response.json();
    reservationsList.innerHTML = reservations.map(reservation =>
        `<li>${reservation.name} - ${reservation.date} - ${reservation.partySize} people</li>`
    ).join('');
}

loadReservations();