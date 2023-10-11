const formPokemon = document.querySelector("#formPokedex");
        const divInfoPokedex = document.querySelector("#infoPokedex");
        const inputPokemon = document.querySelector("#inputPokemon");

        //Evento formulario que se dispara cuando envio el formulario
        formPokemon.addEventListener("submit", (event) =>{
            event.preventDefault();
            const pokemon = inputPokemon.value;
            divInfoPokedex.innerHTML = "Cargando...";
            cargarPokemon(pokemon);
        });

        /*
        //Funcion para ejecutar el fetch, que siempre devuelve una promesa
        function cargarPokemon(pokemon){
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
            .then((reponse) => reponse.json())
            .then((infoPokemon) => {
            divInfoPokedex.innerHTML = `
            <h1>#${infoPokemon.id} - ${infoPokemon.name}</h1>
            <img src="${infoPokemon.sprites.other.dream_world.front_default}" alt="${infoPokemon.name}"></img>
            <p>
                <span>HP: ${infoPokemon.stats[0].base_stat}</span>
                <span>Altura: ${infoPokemon.height}cm</span>
                <span>Peso: ${infoPokemon.weight}kg</span></p>
            `;
            })
            .catch((error) =>{
                alert("El pokemon que pusiste no existe.");
                console.log("Error: " + error);
            })
        }
        */

        // Version mas simple
        async function cargarPokemon(pokemon){
            const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
            const infoPokemon = await respuesta.json();
            divInfoPokedex.innerHTML = `
            <h1>#${infoPokemon.id} - ${infoPokemon.name}</h1>
            <img src="${infoPokemon.sprites.other.dream_world.front_default}" alt="${infoPokemon.name}"></img>
            <p>
                <span>HP: ${infoPokemon.stats[0].base_stat}</span>
                <span>Altura: ${infoPokemon.height}cm</span>
                <span>Peso: ${infoPokemon.weight}kg</span></p>
            `;
        }