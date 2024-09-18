
// realizamos una funcion que recoja los datos del API

const callDataApi = () =>{
    return fetch ("https://hp-api.onrender.com/api/characters")
    .then(response => response.json())
    .then(data =>{
        const cleanData =data.map(item =>{
            return{
                id: item.id,
                name: item.name,
                alternateName: item.alternate_name, //Nombre alternativo
                species: item.species,
                gender: item.gender,
                house: item.house,
                img: item.image,
                ancestry: item.ancestry, // ascendencia
                alive: item.alive, // vivo (un booleano(true o false))
                wand: item.wand.core, //  nucleo de la varita mágica 
                patronus: item.patronus //

            };
        });
        return cleanData;
    })
}
 export default callDataApi;