json.array! @parties do |party|
  json.id party.id
  json.name party.name

  # json.array! party.guests do |guest|
  #   json.name guest.name
  # end
end
