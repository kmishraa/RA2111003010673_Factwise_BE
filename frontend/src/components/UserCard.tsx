import React, { useState } from 'react';
import { User } from '../types';
import DeleteDialog from './DeleteDialog';

interface UserCardProps {
    user: User;
    onEdit: (user: User) => void;
    onDelete: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onEdit, onDelete }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleDelete = () => {
        setIsDialogOpen(true);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    const handleConfirmDelete = () => {
        onDelete(user.id);
        setIsDialogOpen(false);
    };

    return (
        <div className="user-card">
            <div className="card-header" onClick={handleToggle}>
                <img src={user.picture} alt={`${user.first} ${user.last}`} />
                <span>{`${user.first} ${user.last}`}</span>
                <button>{isOpen ? '▲' : '▼'}</button>
            </div>
            {isOpen && (
                <div className="card-body">
                    <p>Age: {new Date().getFullYear() - new Date(user.dob).getFullYear()} Years</p>
                    <p>Gender: {user.gender}</p>
                    <p>Country: {user.country}</p>
                    <p>{user.description}</p>
                    <button onClick={() => onEdit(user)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
            <DeleteDialog
                open={isDialogOpen}
                onClose={handleDialogClose}
                onConfirm={handleConfirmDelete}
            />
        </div>
    );
};

export default UserCard;
