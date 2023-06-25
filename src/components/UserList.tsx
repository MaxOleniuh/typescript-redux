import { FC, useEffect } from 'react'
import type {} from 'redux-thunk/extend-redux';
import { useTypesSelector } from '../hooks/useTypedSelecton'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../redux/action-payload/user'

const UserList: FC = () => {
    const { users, error, loading } = useTypesSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    return (
        <>
            {loading && <h1>Fetching...</h1>}
            {error && <h1>{error}</h1>}
         <div>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </div>
        </>
    )
}

export default UserList;