//send a http request
/*

const xhr = new XMLHttpRequest();

//Method, URL
xhr.open('GET','https://jsonplaceholder.typicode.com/posts'); //get requst the the url given

xhr.onload = () => {
    //const lisOfPhotos = xhr.response;
    //console.log(xhr.response);
    //console.log(lisOfPhotos); // we are geeing JSON in lisOfPhotos but we need a list of photos i.e in array format so we convert

    const lisOfPhotos = JSON.parse(xhr.response); // manuall parsing 
    console.log(lisOfPhotos.length);
    console.log(lisOfPhotos);
    
}

xhr.send(); // sends the request
*/


// Select the element with the class 'posts' from the DOM
const listElement = document.querySelector('.posts');

// Select the template element with the ID 'single-post' from the DOM
const postTemplate = document.getElementById('single-post');

// Create a new instance of XMLHttpRequest for making HTTP requests
const xhr = new XMLHttpRequest();

// Configure the XMLHttpRequest to perform a GET request to the specified URL
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// Set the response type of the XMLHttpRequest to 'json'
// This tells the browser that we expect a JSON response and it will parse it automatically
xhr.responseType = 'json';

// Define the function to be executed when the request is complete (when the response is received)
xhr.onload = () => {
    // Store the parsed JSON response in the variable 'lisOfPhotos'
    const lisOfPhotos = xhr.response;

    // Iterate over each post object in the 'lisOfPhotos' array
    for (const post of lisOfPhotos) {
        // Import the content of the 'postTemplate' template into a new document fragment
        const postEl = document.importNode(postTemplate.content, true);
        
        // Set the text content of the 'h2' element within the imported template to the post's title, converted to uppercase
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        
        // Set the text content of the 'p' element within the imported template to the post's body
        postEl.querySelector('p').textContent = post.body;
        
        // Append the populated template content to the 'listElement' in the DOM
        listElement.append(postEl);
    }
};

// Send the HTTP request
xhr.send();

/*
xhr.onload is an event handler that gets called when the request completes successfully.
const lisOfPhotos = xhr.response; stores the parsed JSON response in lisOfPhotos.
The for loop iterates over each post object in the lisOfPhotos array.
document.importNode(postTemplate.content, true) creates a deep copy of the content in the postTemplate.
postEl.querySelector('h2').textContent = post.title.toUpperCase(); sets the title of the post in uppercase in the copied template.
postEl.querySelector('p').textContent = post.body; sets the body of the post in the copied template.
listElement.append(postEl); appends the populated template to the listElement.
*/
