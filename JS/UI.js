export class UI {
    DisplayGames(data) {
        let block = ``;
        for (let i = 0; i < data.length; i++) {
            block += `
                        <div class="col-sm-12 col-md-6 col-xl-4 col-xxl-3">
                            <div data-id="${data[i].id}" class="card h-100 bg-transparent" role="button">
                                <div class="card-body">
                                    <figure class="position-relative">
                                        <img class="card-img-top h-50 cover" src="${data[i].thumbnail}" alt="">
                                    </figure>
                                    <figcaption>
                                        <div class="container d-flex justify-content-between align-items-center">
                                            <h3 class="fs-5">${data[i].title}</h3>
                                            <span class="badge bg-primary p-2">Free</span>
                                        </div>
                                        <p class="text-secondary text-center mt-1 fs-6">${data[i].short_description.split(" ", 8)}</p>
                                    </figcaption>
                                    <div class="footer d-flex justify-content-between fixed-bottom m-2">
                                        <span class="badge bg-dark p-2">${data[i].genre}</span>
                                        <span class="badge bg-dark p-2">${data[i].platform}</span>
                                    </div>
                                </div>
                            </div>
                        </div>`;
        }
        document.querySelector('#games-data').innerHTML = block;
    }
}
