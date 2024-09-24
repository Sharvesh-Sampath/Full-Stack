document.addEventListener('DOMContentLoaded', () => {
    const seatsContainer = document.getElementById('seats');
    
    // Generate seats (5 rows and 5 columns)
    for (let i = 0; i < 25; i++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.addEventListener('click', () => {
            seat.classList.toggle('selected');
        });
        seatsContainer.appendChild(seat);
    }

    // Handle submit button
    document.getElementById('submit').addEventListener('click', () => {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        const selectedSeatsIndexes = Array.from(selectedSeats).map(seat => Array.from(seatsContainer.children).indexOf(seat));
        
        if (selectedSeatsIndexes.length > 0) {
            alert('Selected seats: ' + selectedSeatsIndexes.join(', '));
        } else {
            alert('No seats selected.');
        }
    });
});
