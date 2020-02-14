import React, { useRef, useState } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import InformationList from './InformationList'
import NewForm from './NewForm'

const EntryPoint = (props) => {
  let formRef = useRef()
  const initialState = {name: undefined, email: undefined, role: 'Member'}
  const [state, setState] = useState(initialState)

  const onChangeHandler = (event) => setState({...state, [event.target.name]: event.target.value})

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // const data = new FormData(event.target);
    props.addUser(state)
    formRef.current.reset()
    setState(initialState)
  }

  return <div className="col-6 m-auto">
    { <NewForm {...{state, formRef, onSubmitHandler, onChangeHandler}} /> }
    { props.data.length > 0 && <InformationList {...props} /> }
  </div>
}

const mapStateToProps = ({data}) => ({ data });

const mapDispatchToProps = (dispatch) => ({
  addUser: data => dispatch(actions.addUser(data)),
  removeUser: index => dispatch(actions.removeUser(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(EntryPoint);