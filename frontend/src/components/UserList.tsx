import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import { User } from '../types';
import UserForm from './UserForm';

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    useEffect(() => {
        axios.get('/celebrities.json').then((response) => {
            setUsers(response.data);
        });
    }, []);

    const handleEdit = (user: User) => {
        setSelectedUser(user);
    };

    const handleDelete = (id: number) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const handleSave = (user: User) => {
        if (selectedUser) {
            setUsers(users.map(u => (u.id === user.id ? user : u)));
        } else {
            setUsers([...users, { ...user, id: users.length + 1 }]);
        }
        setSelectedUser(null);
    };

    return (
        <div>
            {selectedUser && <UserForm user={selectedUser} onSave={handleSave} onCancel={() => setSelectedUser(null)} />}
            {users.map(user => (
                <UserCard key={user.id} user={user} onEdit={handleEdit} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default UserList;
