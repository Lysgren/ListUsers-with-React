import React, { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal/ErrorModal'

import classes from './AddUser.module.css'

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  let [error, setError] = useState()

  const addUserHandler = event => {
    event.preventDefault()

    if (enteredUsername.trim().length !== 0 && enteredAge.trim().length !== 0 && enteredAge > 0) {
      props.onAddUser(enteredUsername, enteredAge)
      setEnteredUsername('')
      setEnteredAge('')
    } else {
      setError({ title: 'Invalid input', message: 'Please enter a valid name and age (non-empty values).' })
    }
  }

  const userNameChangeHandler = event => {
    setEnteredUsername(event.target.value)
  }

  const userAgeChangeHandler = event => {
    if (event.target.value < 1) {
      setError({ title: 'Invalid input', message: 'Please enter a valid age' })
    } else {
      setEnteredAge(event.target.value)
    }
  }

  const clearErrorHandler = () => {
    setError(null)
  }

  return (
    <div>
     { error && <ErrorModal title={ error.title } message={ error.message } exit={ clearErrorHandler } /> }
      <Card className={ classes.input }>
        <form onSubmit={ addUserHandler }>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={ enteredUsername }
            onChange={ userNameChangeHandler } />
          <label htmlFor='age'>Age</label>
          <input
            id='age'
            type='number'
            value={ enteredAge }
            onChange={ userAgeChangeHandler } />
          <Button type='submit'>Add user</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser