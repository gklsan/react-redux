import React from 'react'
import { Button, Form } from 'react-bootstrap'

const NewForm = ({state, formRef, onSubmitHandler, onChangeHandler}) => {
  return <div>
    <h1 className="text-center text-uppercase">New User Form</h1>
    <Form onSubmit={onSubmitHandler} ref={formRef}>
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          name="email"
          value={state.email}
          placeholder="Enter email"
          onChange={onChangeHandler}/>
      </Form.Group>

      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          type="text"
          name="name"
          value={state.name}
          placeholder="Name"
          onChange={onChangeHandler}/>
      </Form.Group>

      <Form.Group controlId="role">
        <Form.Label>Role</Form.Label>
        <Form.Control as="select" name="role" value={state.role} onChange={onChangeHandler}>
          <option>Member</option>
          <option>Admin</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
}

export default NewForm;