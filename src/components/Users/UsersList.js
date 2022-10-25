import React, {Fragment, useState, useEffect} from "react";
import {FaSpinner} from "react-icons/fa";


export default function UsersList() {

    const [users, setUsers] = useState(null);
    const [userIndex, setUserIndex] = useState(0);
    const user = users?.[userIndex];

    useEffect(() => {
        fetch("http://localhost:3001/users")
            .then((resp) => resp.json())
            .then(data => setUsers(data));
    },[]);

    if (users === null) {
        return <FaSpinner className="icon-loading"/>
    }

    return (
    <Fragment>
        <ul className="users items-list-nav">
            {users.map((user, i) => (
                <li 
                key={user.id}
                className={i === userIndex ? "selected" : null}>
                    <button className="btn"
                            onClick={() => setUserIndex(i)}>
                                {user.name}
                            </button>
                </li>
            ))}
        </ul>

        {user && (
            <div className ="item user">
                <div className="item-header">
                    <h2>{user.name}</h2>
                </div>
                <div className="user-details">
                    <h3>{user.title}</h3>
                    <p>{user.details}</p>
                </div>
            </div>
        )}
    </Fragment>
    );
}