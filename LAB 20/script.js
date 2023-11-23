document.getElementById('rent-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('rent-message').textContent = 'Vehicle sent for rent';
});