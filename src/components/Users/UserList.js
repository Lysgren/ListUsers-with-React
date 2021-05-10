import React from 'react'
import Card from '../UI/Card'
import classes from './UserList.module.css'

const UserList = props => {

  let userList = null
  if (props.users.length >= 1) {
    userList = (
      <ul>
        { props.users.map((user, index) => (
          <li key={ index }>Name: { user.name } Age:{ user.age }</li>
        ))}
      </ul>
    )
  }

  return (
    <Card className={ classes.users }>
      { userList }
    </Card>
  )
}

export default UserList