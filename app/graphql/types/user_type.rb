module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: true
    field :birthdate, Types::DateType, null: true
    field :job, String, null: true
    field :phone, String, null: true
  end
end
