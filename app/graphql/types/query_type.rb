module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :users_all, [UserType], null: false

    def users_all
      User.all
    end
  end
end
