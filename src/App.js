import React, { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

function App() {
  const [userList, setUserList] = useState([])

  const addUserHandler = (name, age) => {
    setUserList((prevUserList) => {
      return [...prevUserList, {name, age}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={ addUserHandler } />
      <UserList users={ userList } />
    </div>
  )
}

export default App