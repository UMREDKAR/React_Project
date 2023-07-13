import React, { useState } from 'react';
import ErrorModal from './ErrorModal';


function Userform(props)
{
    const[user,setUser] = useState('');
    const[age,setAge] = useState('');
    const[error,setError] = useState();

    function userChangeHandler(event)
    {
        setUser(event.target.value);
    }

    function ageChangeHandler(event)
    {
        setAge(event.target.value);
    }


    function submitHandler(event)
    {
        event.preventDefault();

        if(user.length === 0 && age.length === 0)
        {
            setError({
                title: "Invalid Input",
                message: "Please Enter A Valid Name And Age"
            });
            return;
        }
        if(+age<1)
        {
            setError({
                title: "Invalid Age",
                message: "Please Enter A Valid Age"
            })
            return;
        }
        props.onAddUser(user,age);
        setAge('');
        setUser('');
    }

    function errorHandler()
    {
        setError(null);
    }
    return(
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <form onSubmit={submitHandler}>
            <div>
                <b>UserName</b>
                <input type='text' value={user} onChange={userChangeHandler} ></input>
            </div>

            <div>
                <b>Age (years)</b>
                <input type='number' value={age} onChange={ageChangeHandler} ></input>
            </div>

            <button type='submit'>Add User</button>
       </form>
       </div>
    );
}

export default Userform