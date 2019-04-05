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
        <table>
          <thead>
            <th>Name</th>
            <th>Birthdate</th>
            <th>Phone</th>
            <th>Job</th>
          </thead>
          <tbody>
            {data.usersAll.map(user => <Row key={user.id} user={user} />)}
          </tbody>
        </table>
      )
    }}
  </Query>
)

const Row = ({ user: { birthdate, job, phone, name } }) => (
  <tr>
    <td>{name}</td>
    <td>{birthdate}</td>
    <td>{phone}</td>
    <td>{job}</td>
  </tr>
)

export default Users
