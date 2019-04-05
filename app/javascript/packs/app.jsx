import { ApolloProvider } from "react-apollo"
import { Container } from 'styled-bootstrap-components'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'
import React from 'react'
import Users from './users'

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'same-origin',
  },
  request: (operation) => {
    const csrfToken = document.querySelector('meta[name=csrf-token]').getAttribute('content')
    operation.setContext({
      headers: { "X-CSRF-Token": csrfToken }
    })
  }
})

const App = () => (
  <ApolloProvider client={client}>
    <Container>
      <Header />
      <Users />
    </Container>
  </ApolloProvider>
)

const Header = () => <h1>Sherlock Test</h1>

document.addEventListener('DOMContentLoaded', () => {
  render(
    <App />,
    document.body.appendChild(document.createElement('div'))
  )
})
