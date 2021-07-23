const keyApi = `8d0f03e191dd4295b4d5eaac2edc9efa`

let URL = `https://api.rawg.io/api/games?key=${keyApi}&page=2&page_size=5`

fetch(URL, {})
    .then(respuesta => respuesta.json())

.then(res => {
    console.log(res.results);

    let results = res.results;

    console.log(results)

    let resultsHTML = document.getElementById('results');

    results.forEach((result) => {
        let resultHTMLfor = document.createElement('div');





        resultHTMLfor.innerHTML = `
        <img src="${result.background_image}" style="width: 100%">
        <h1 style="text-align: rigth">${result.name} <p style="font-size: 0.9rem">Fecha de lanzamiento:${result.released}</p></h1>
        <p>${result.metacritic}%</p>
        <p class="card-text"><small class="text-muted">Last updated ${result.updated}</small></p>

                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
                </button>
                
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${result.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>

        <hr>
        
       `;



        result.platforms.forEach((index) => {
            // console.log(index.platform.name)
            let plataforms = document.createElement(`span`)


            plataforms.innerHTML = `
                <button class="badge bg-secondary">${index.platform.name}</button>`;

            resultsHTML.appendChild(plataforms);
        });

        resultsHTML.appendChild(resultHTMLfor);





    });
})