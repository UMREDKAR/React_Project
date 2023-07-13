import React, { useState } from 'react';

import Userform from './Userform';
import ShowUserData from './ShowUserData';


function App() {

  const [userList,setUserList] = useState([]);
  function userListHandler(uName,uAge)
  {
     setUserList((prevList)=>{
         return [...prevList,{name: uName , age: uAge , id: Math.random().toString()}];
     });
  }

  return (
    
        <div>
          <Userform onAddUser={userListHandler}/>
          <ShowUserData users={userList}/>
        </div>
  );
}

export default App;
