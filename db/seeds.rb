# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'json'

User.delete_all

file = File.read(File.expand_path('../users.json', File.dirname(__FILE__)))
users = JSON.parse(file)
data = users.map do |user|
  {
    "id": user["id"],
    "name": user["name"],
    "phone": user["phone"],
    "job": user["job"],
    "birthdate": user["birthdate"]
  }
end
User.create!(data)
