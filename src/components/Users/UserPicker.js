import React, {useState, useEffect} from "react";
import {FaSpinner} from "react-icons/fa";

export default function UserPicker() {
    const [users, setUsers] = useState(null);
    
    useEffect(() => {
        async function getUsers() {
            const resp = await fetch("http://localhost:3001/users");
            const data = await (resp.json());
            setUsers(data);
        }
        getUsers();
    }, []);

    if (users === null) {
        return <FaSpinner className="icon-loading"/>
    }
    return (
        <select>
            {users.map((user, i) => (
                <option key={user.id}>{user.name}</option>
            ))}
        </select>
    );
}