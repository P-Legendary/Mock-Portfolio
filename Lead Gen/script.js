document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    if (query) {
        searchBusinesses(query);
    }
});

function searchBusinesses(query) {
    const clientId = 'YOUR_CLIENT_ID';
    const clientSecret = 'YOUR_CLIENT_SECRET';
    const url = `https://api.foursquare.com/v2/venues/search?near=${query}&client_id=${clientId}&client_secret=${clientSecret}&v=20210731`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayResults(data.response.venues))
        .catch(error => console.error('Error:', error));
}

function displayResults(venues) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (venues.length === 0) {
        resultsContainer.innerHTML = '<p>No businesses found.</p>';
        return;
    }

    venues.forEach(venue => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerHTML = `<h3>${venue.name}</h3><p>${venue.location.address}</p>`;
        resultsContainer.appendChild(resultItem);
    });
}
