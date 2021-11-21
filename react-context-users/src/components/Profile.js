import React, { useContext } from 'react'
import UserContext from '../context/User/UserContex';

const Profile = () => {
    const { selectedUser } = useContext(UserContext)
    return (
        <>
          {selectedUser ? (<div>
              <img
              src={selectedUser.avatar}
              alt="user selected"
              className="card-img-top img-fluid rounded-circle m-auto"
              style={{ width: 180 }}
              />
              <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
              <h3>email: {selectedUser.email}</h3>
          </div>): (<h1>No hay usuario seleccionado</h1>)}  
        </>
    )
}

export default Profile