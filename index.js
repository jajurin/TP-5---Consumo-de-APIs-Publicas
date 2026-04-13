async function obtenerPokemon(nombre) {
  const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
  if (!respuesta.ok) throw new Error(respuesta.status);

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
  document.getElementById("pokemonForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = e.target.pokemonName.value;
    if (nombre == "") {
  document.getElementById("resultado").innerHTML = `
    <h2>Porfavor ingresar datos</h2>
    <p>Ingresá un nombre o ID de Pokémon.</p>
  `;
  return;
}
    try{


    const pokemon = await obtenerPokemon(nombre);

    document.getElementById("resultado").innerHTML = `
      <h1>${pokemon.nombrePok}</h1>
      <img src="${pokemon.imagen}" alt="${pokemon.nombrePok}" />
      <p>Peso: ${pokemon.peso/10 + "kg"}</p>
      <p>Altura: ${pokemon.altura*10 + "cm"}</p>
      <p>Tipos: ${pokemon.tipos.map(tipo => tipo.type.name).join(", ")}</p>
    `;
        } catch (error){
             document.getElementById("resultado").innerHTML = `
        <h2> Pokémon no encontrado</h2>
        <p>Verificá el nombre e intentá de nuevo.</p>
      `;
        }
  });
}

mostrarPokemon();