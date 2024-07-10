import React, { useState } from 'react';
import { User } from '../types';

interface UserFormProps {
    user: User | null;
    onSave: (user: User) => void;
    onCancel: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ user, onSave, onCancel }) => {
    const [formData, setFormData] = useState<User>(user || {
        id: 0,
        first: '',
        last: '',
        dob: '',
        gender: '',
        email: '',
        picture: '',
        country: '',
        description: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="first" value={formData.first} onChange={handleChange} placeholder="First Name" />
            <input name="last" value={formData.last} onChange={handleChange} placeholder="Last Name" />
            <input name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth" />
            <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input name="picture" value={formData.picture} onChange={handleChange} placeholder="Picture URL" />
            <input name="country" value={formData.country} onChange={handleChange} placeholder="Country" />
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default UserForm;
