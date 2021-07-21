// fetch espera una promesa

fetch("https://reqres.in/api/users", {})
    // transformo la promesa en un json para manipularla
    .then(respuesta => respuesta.json())
    //accedo al objeto y su datos
    .then(res => {
        console.log(res.data);
        //guardo los usuarios
        let users = res.data;


        //defino un lugar para mis usuarios
        let usersHTML = document.getElementById('users');

        //user por cada elemento que tenga adentro voy a tener un usuario, y que por cada user que me encuentre (en este caso 6 veces ya q son 6 user)
        users.forEach(user => {
            //aca le digo que lo inserte a cada user en el html en un div
            let userHTMLfor = document.createElement('div');

            //como ya cree un elemento en donde guardarlo le digo que inserte los user
            userHTMLfor.innerHTML = `
                <img src="${user.avatar}">
                <div>ID: ${user.id}:${user.first_name} ${user. last_name}</div>
                <div class="text-primary">${user.email}</div>
                `;
            // todo esto lo tengo que insertar en algun lado, por eso lo voy a insertar en el objeto creado (createElement), por cada pasada le meto un hijo
            usersHTML.appendChild(userHTMLfor);

        });
    });