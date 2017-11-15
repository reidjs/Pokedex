//ajax to fetch info
export const fetchAllPokemon = () => (
    $.ajax({
      url: "/api/pokemon/",
      method: "GET"
    })
);
