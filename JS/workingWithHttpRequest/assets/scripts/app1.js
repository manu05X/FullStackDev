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

//send a http request
const xhr = new XMLHttpRequest();

//Method, URL
xhr.open('GET','https://jsonplaceholder.typicode.com/posts'); //get requst the the url given

xhr.responseType = 'json';

xhr.onload = () => {
    const lisOfPhotos = xhr.response;
    console.log(lisOfPhotos); // we are geeing JSON in lisOfPhotos but we need a list of photos i.e in array format so we convert
}

xhr.send(); // sends the request