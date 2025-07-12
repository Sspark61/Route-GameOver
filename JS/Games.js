import { UI } from "./UI.js";
import { Details } from "./Details.js";

export class Games {
    constructor(){
        this.ui = new UI();
        this.getGames("mmorpg");

        document.querySelectorAll('.menu a').forEach((element) => {
            element.addEventListener('click', (e) => {
                document.querySelector('.menu .active').classList.remove('active');
                e.target.classList.add('active');
                this.getGames(e.target.dataset.category);
            });
        });
    }

    async getGames(category) {

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'f68daabaa9msh6fd2d8b2e851e70p189baejsnb3e7348222ea',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
            const data = await response.json();
            this.ui.DisplayGames(data);
            this.cardClick();
    }

    cardClick(){
        document.querySelectorAll('.card').forEach((element) => {
            element.addEventListener('click' , () => {
                let id = element.dataset.id;
                this.displayToggle(id);
            });
        });
    }

    displayToggle(id){
        let details = new Details(id);
        document.querySelector('.home').classList.add('d-none');
        document.querySelector('.details').classList.remove('d-none');
    }
}