import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../features/user/userSlice'

function UserView() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.user)
  console.log(users)

  useEffect(() => {
    dispatch(fetchUsers())
  },[dispatch])

  return (
    <div>
        <h2>List of users</h2>
        {users.loading && <div>Loading...</div>}
        {!users.loading && users.error ? <div>{users.error}</div>: null}
        {!users.loading && users.users.length ? (
          <ol>
            {users.users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ol>
        )
       : null 
      }
    </div>
  )
}

export default UserView