import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

let dogData = [];
// on load
window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);

    const id = data.get('id');
    console.log(id);

    // const response = await getDog(id);
});
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container
