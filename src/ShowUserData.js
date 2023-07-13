import React from "react";


function ShowUserData(props)
{
    return(
          <ul>
           {props.users.map((user)=>(
            <li key={user.id}>
              {user.name} {user.age} years old
            </li>
            
           ))}
          </ul>
    );
}

export default ShowUserData;