//ajax to fetch info
export const fetchAllPokemon = () => (
    $.ajax({
      url: "/api/pokemon/",
      method: "GET"
    })
);

export const fetchSinglePokemon = (id) => {
  console.log(`Making GET request to /api/pokemon/${id}`);
  return (
    $.ajax({
    url: `/api/pokemon/${id}`,
    method: "GET"
    })
  );
};
