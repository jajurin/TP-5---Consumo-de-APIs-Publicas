"# TP-5---Consumo-de-APIs-Publicas" 
ENDPOINTS:
https://pokeapi.co/api/v2/pokemon/primarina
MÉTODO=GET
STATUS CODE= 200(OK)
Id, Nombre, habilidades, altura y movimientos


Esto devuelve en su totalidad los atributos del pokemon primaria y lo dedujimos ya que en endpoint trae la información que le pedís y decía pokémon así que luego pusimos el nombre de un pokemon

en errores puede ser un not found(no encontrado, 404) o bad request(si la petición no está bien escrita, 400)
https://pokeapi.co/api/v2/pokemon/623
MÉTODO: GET
STATUS CODE: 200(OK)
Relevantes:
Id, Nombre, habilidades, altura y movimientos


Esto devuelve en su totalidad los atributos del pokemon golurk y lo dedujimos ya que en endpoint trae la información que le pedís y decía pokémon asi que luego pusimos el id(en vez de en nombre)de un pokemon

en errores puede ser un not found(no encontrado 404) o bad request(si la petición no está bien escrita 400)

https://pokeapi.co/api/v2/pokemon?limit=90
MÉTODO=GET
STATUS CODE= 200(OK)
Relevantes:
Nombre y url

Esto devuelve en su totalidad los primeros 90 pokemons y con su url

nos encontramos como hacerlo en la información de pokémon api 

en errores puede ser un not found(no encontrado 404) o bad request(si la petición no está bien escrita 400)

https://pokeapi.co/api/v2/type/water
MÉTODO=GET
STATUS CODE= 200(OK)
Relevantes:
Resistencias, efectividades, debilidades, inmunidades y no dañantes.

Esto devuelve la información del tipo y sus características. Lo deducimos ya que cambiamos lo que necesitamos así que cambiamos pokemon por type y escribimos el tipo(ejemplo agua)

en errores puede ser un not found(no encontrado 404) o bad request(si la petición no está bien escrita 400)

https://pokeapi.co/api/v2/pokemon/1400
MÉTODO=GET
STATUS CODE= 404(Not Found)
Not Found
Relevantes:
no hay

Lo dedujimos poniendo un id mayor al número existente de pokemones que hay

ESTRUCTURA DEL PROYECTO:
INDEX.HTML
STYLE.CSS
INDEX.JS
IMG/IMAGENES

DECISIONES
Se utilizó fetch con async/await para hacer la petición a la API, y siguiendo la guia y ademas de agregar el mensaje de espera
Se usó respuesta.ok para detectar si el Pokémon existe.
Transformamos los datos recibidos asi tener una medida en que mostrarlos
Usamos map para los tipos porque era mas de uno y nos causo un poco de problemas
innerHTML para mostrar resultados, en el div resultados asi no modificar lo otro

DIFICULTADES:
Entender nuestros problemas
Conectar html con js
Dificultad con tipos al ser mas de uno, nos dimos cuenta mas tarde
