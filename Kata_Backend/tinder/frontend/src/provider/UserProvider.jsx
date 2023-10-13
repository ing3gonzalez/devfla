import { useState } from "react"
import { UserContext } from "../context/UserContext"

export const UserProvider = ({ children }) => {

    const [users, setUsers] = useState([]);

    let addUser = (user) =>
    {
        setUsers([...users,user])
    }

    let deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }

  let updateUser = (id,name,age) => {

    const affectedUser = users.map((user) => {
        if(user.id ===id)
        {
            return {...user,name:name,age:age}
        }
        return user
    })
setUsers(affectedUser)
  }
    return   <UserContext.Provider value={{users,addUser,deleteUser,updateUser}}>
            {children}

        </UserContext.Provider>

    
}