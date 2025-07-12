import { UI } from './UI.js';

export class Details{
    constructor(id) {
        this.ui = new UI();
        this.getDetails(id);

        document.querySelector('.btn-close').addEventListener('click', () => {
            document.querySelector('.home').classList.remove('d-none');
            document.querySelector('.details').classList.add('d-none');
            document.querySelector('#details-data').textContent = '';
        });
    }

    getDetails(id){
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'f68daabaa9msh6fd2d8b2e851e70p189baejsnb3e7348222ea',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }

        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
            .then(response => response.json())
            .then(data => {
                this.DisplayDetails(data);
            })
            .catch(err => console.error(err));
    }

    DisplayDetails(data) {
        let block = `
            <div class="col-md-4">
                <img class="w-100" src="${data.thumbnail}" alt="">
            </div>
            <div class="col-md-8">
                <h3>Title: ${data.title}</h3>
                <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
                <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
                <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
                <p class="small">${data.description}</p>
                <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
            </div>`;
        document.querySelector('#details-data').innerHTML = block;
    }
}