// Add event listener to the search button
document.getElementById('search-btn').addEventListener('click', function() {
    // Get the search term from the input field
    var searchTerm = document.getElementById('search-input').value;
    // Construct the API URL with the search term
    var apiUrl = 'https://api.themoviedb.org/3/search/person?api_key=237381b5e53dc74a9c7f25df244ff47e&query=' + encodeURIComponent(searchTerm);

    // Fetch data from the API
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => displayResults(data))
    .catch(error => console.error('Error:', error));
});

// Function to display the results
function displayResults(data) {
    var resultsDiv = document.getElementById('results');
    // Clear previous results
    resultsDiv.innerHTML = '';
    // Check if there are results and if yes, display them
    if (data.results && data.results.length > 0) {
        data.results.forEach(function(actor) {
            // Create a new div for the actor
            var actorDiv = document.createElement('div');
            actorDiv.classList.add('actor');
            // Set the actor's image or a placeholder if there is no image
            var actorImage = actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : 'path/to/your/placeholder-image.jpg';
            // Add the actor's ID to the div for use in the event listener
            actorDiv.dataset.actorId = actor.id; // Use custom data attributes to store the ID
            // Set inner HTML for the actor div
            actorDiv.innerHTML = `<img src="${actorImage}" alt="${actor.name}" style="width:100px;"><p>${actor.name}</p>`;
            // Add click event listener to the actor div
            actorDiv.addEventListener('click', function() {
                // Navigate to the actor details page using the actor ID
                window.location.href = 'actor-details.html?actorId=' + actor.id;
            });
            // Append the actor div to the results div
            resultsDiv.appendChild(actorDiv);
        });
    } else {
        // Display a message if no results were found
        resultsDiv.innerHTML = '<p>No results found.</p>';
    }
}

// Add event listener to the search button
document.getElementById('search-btn').addEventListener('click', function() {
    // Get the search term from the input field
    var searchTerm = document.getElementById('search-input').value;
    // ... existing code to handle the search ...
});