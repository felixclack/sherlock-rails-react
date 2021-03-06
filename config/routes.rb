Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  resources :pages
  post "/graphql", to: "graphql#execute"
  match '/*path', to: 'pages#index', via: :all
  root 'pages#index'
end
