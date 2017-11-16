json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :image_url
end
# json.id @pokemon.id
# json.name @pokemon.name
# json.attack @pokemon.attack
# json.defense @pokemon.defense
# json.image_url @pokemon.image_url
# json.moves @pokemon.moves
# json.poke_type @pokemon.poke_type

json.items @pokemon.items do |item|
  json.extract! item, :id, :name, :pokemon_id
end
# json.id item.id
# json.name item.name
# json.pokemon_id item.pokemon_id
# json.price item.price
# json.happiness item.happiness
# json.image_url item.image_url
# json.extract! @pokemon, :id, :name, :attack
