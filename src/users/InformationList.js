import React from 'react'
import { Button, Table } from 'react-bootstrap'

const InformationList = ({data, removeUser}) => {
  return(
    <div>
      <hr />
      <h1 className="text-center text-uppercase">User Informations</h1>
      {
        <Table responsive="sm">
          <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {
            data.map((user, idx) => <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td><Button variant="primary" onClick={() => removeUser(idx)}>Remove</Button></td>
            </tr>)
          }
          </tbody>
        </Table>
      }
    </div>
  )
}

export default InformationList