json.array! @guests do |guest|
  if guest.age > 40 && guest.age < 50
    json.id guest.id
    json.name guest.name
  end
end
