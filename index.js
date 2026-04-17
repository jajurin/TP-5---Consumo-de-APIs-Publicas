async function obtenerPokemon(nombre) {
  const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

  if (!respuesta.ok) throw new Error("No encontrado");

  const data = await respuesta.json();

  return {
    nombrePok: data.name,
    imagen: data.sprites.front_default,
    tipos: data.types,
    peso: data.weight,
    altura: data.height
  };
}

async function mostrarPokemon() {
  const nombre = document.getElementById("pokemonNombre").value;


  if (nombre === "") {
    resultado.innerHTML = `<h2>Ingresá un nombre/ID. No deje el campo vacio porfavor</h2>`;
    return;
  }
  resultado.innerHTML = `<h2>Buscando pokemon!...</h2>`;
  try {
    const pokemon = await obtenerPokemon(nombre);

    resultado.innerHTML = `
      <h1>${pokemon.nombrePok}</h1>
      <img src="${pokemon.imagen}" />
      <p>Peso: ${pokemon.peso / 10} kg</p>
      <p>Altura: ${pokemon.altura * 10} cm</p>
      <p>Tipo/s: ${pokemon.tipos.map(t => t.type.name).join(", ")}</p>
    `;
  } catch {
    resultado.innerHTML = `<h2>Pokémon no encontrado</h2>`;
  }
}