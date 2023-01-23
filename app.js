import { getDog, getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

let dogData = [];
// on load
window.addEventListener('load', async () => {
    // fetch all dogs
    const allDogs = await getDogs();

    dogData = allDogs;

    // render and append all dog cards to the container
    for (let dog of dogData) {
        const dogCardEl = renderDogCard(dog);

        dogListContainer.append(dogCardEl);
    }
});
