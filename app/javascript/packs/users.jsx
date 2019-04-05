import { Table, Tr } from 'styled-bootstrap-components'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import React from 'react'

const userQuery = gql`
  {
    usersAll {
      id
      birthdate
      name
      phone
      job
    }
  }
`

const Users = () => (
  <Query query={userQuery}>
    {({ loading, error, data }) => {
      if (loading) { return <p>Loading...</p> }
      return (
        <Table>
          <thead>
            <Tr>
              <th>Name</th>
              <th>Birthdate</th>
              <th>Phone</th>
              <th>Job</th>
            </Tr>
          </thead>
          <tbody>
            {data.usersAll.map(user => <Row key={user.id} user={user} />)}
          </tbody>
        </Table>
      )
    }}
  </Query>
)

const Row = ({ user: { birthdate, job, phone, name } }) => (
  <Tr light>
    <td>{name}</td>
    <td>{birthdate}</td>
    <td>{phone}</td>
    <td>{job}</td>
  </Tr>
)

export default Users
