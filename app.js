const obtenerPokemon=async(id)=>{
    try {
        const res=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        const data=await res.json()
        // console.log(data.name)
        return data
    } catch (error) {
        console.log(error)
    }
}

async function init( idPokemon ){
    const Pokemos= await obtenerPokemon(idPokemon)
   mostrar(Pokemos)
}

function mostrar(Pokemos){
   
    window.image.setAttribute('src', Pokemos.sprites.front_default)
    window.monbrePokemos.textContent= Pokemos.name
}

function numerosAleatorios (){
    let primerPokemon =Math.round(Math.random()*150)
    let segundoPokemon =Math.round(Math.random()*150)
init(primerPokemon)
 init(segundoPokemon )
}
window.search.addEventListener('change', async()=>{
    const Pokemos= await obtenerPokemon(window.search.value)
    mostrar(Pokemos)
})

numerosAleatorios()

