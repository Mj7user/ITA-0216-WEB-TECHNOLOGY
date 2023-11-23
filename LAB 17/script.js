let candidate1Count = 0;
let candidate2Count = 0;

document.getElementById('voting-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedCandidate = document.getElementById('candidate').value;

    if (selectedCandidate === 'candidate1') {
        candidate1Count++;
    } else if (selectedCandidate === 'candidate2') {
        candidate2Count++;
    }

    document.getElementById('candidate1-count').textContent = candidate1Count;
    document.getElementById('candidate2-count').textContent = candidate2Count;
});