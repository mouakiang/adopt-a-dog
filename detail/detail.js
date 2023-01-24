import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

let dogData = [];
// on load
window.addEventListener('load', async () => {
    // get the id from URL
    const data = new URLSearchParams(window.location.search);
    // use the id to fetch the dog

    const id = data.get('id');

    const response = await getDog(id);

    dogData = response;

    // render and append this dog's details to the container
    const dogRender = renderDogDetail(dogData);

    dogDetailContainer.append(dogRender);
});
