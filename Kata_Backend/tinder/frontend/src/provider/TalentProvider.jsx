import { useState } from "react"
import { UserContext } from "../context/TalentContext"

export const TalentProvider = ({ children }) => {

    const [talent, setTalent] = useState([]);

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
            return {...user,id:id, name:name, city:city, country:country, email:email, phone:phone, vhour:vhour}
        }
        return user
    })
setUsers(affectedUser)
  }
    return   <UserContext.Provider value={{users,addUser,deleteUser,updateUser}}>
            {children}

        </UserContext.Provider>

    
}