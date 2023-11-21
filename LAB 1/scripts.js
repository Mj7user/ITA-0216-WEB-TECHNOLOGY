document.addEventListener('DOMContentLoaded', function () {
    // Get the form and the table
    var form = document.getElementById('bookForm');
    var table = document.getElementById('booksTable');
    
    // Get the submit button
    var submitButton = document.getElementById('submitButton');

    // Add an event listener for the button click
    submitButton.addEventListener('click', function () {
        // Get form values
        var title = document.getElementById('title').value;
        var author = document.getElementById('author').value;
        var year = document.getElementById('year').value;
        var publisher = document.getElementById('publisher').value;
        var category = document.getElementById('category').value;

        // Create a new table row
        var newRow = document.createElement('tr');

        // Add cells to the new row with form values
        newRow.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${year}</td>
            <td>${publisher}</td>
            <td>${category}</td>
        `;

        // Append the new row to the table
        table.appendChild(newRow);

        // Reset the form
        form.reset();
    });
});
