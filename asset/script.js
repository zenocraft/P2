// Add event listener to the "Fetch Data" button
document.getElementById('fetchDataBtn').addEventListener('click', fetchData);

// Function to fetch data from the API
function fetchData() {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Initialize a GET request to fetch data from the API
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    // Data container
    const dataContainer = document.getElementById('dataContainer');
    // dataContainer.style.display = 'none';

    // When the request is loaded (readyState 4)
    xhr.onload = function() {
        // Check if the response status is 200 (OK)
        if (this.status === 200) {
            // Parse the JSON response
            const posts = JSON.parse(this.responseText);

            // Initialize an empty string to build the output
            let output = '';

            // Loop through the posts array and create HTML structure
            posts.forEach(function(post) {
                output += `
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.body}</p>
                        </div>
                    </div>
                `;
            });

            // Insert the generated HTML into the data container
            dataContainer.innerHTML = output;

            // Show the data container after fetching the data
            dataContainer.style.display = 'flex';
        } else {
            // Display an error message if the status is not 200
            dataContainer.innerHTML = '<p class="text-danger">Error fetching data</p>';
            dataContainer.style.display = 'flex'; 
        }
    };

    // Handle network errors
    xhr.onerror = function() {
        // Display an error message for network issues
        dataContainer.innerHTML = '<p class="text-danger">Request error...</p>';
        dataContainer.style.display = 'flex'; 
    };

    // Send the request to the server
    xhr.send();
}
