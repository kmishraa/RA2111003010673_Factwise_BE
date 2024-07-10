import React from 'react';

interface DeleteDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({ open, onClose, onConfirm }) => {
    if (!open) return null;

    return (
        <div className="overlay">
            <div className="dialog">
                <div className="dialog-header">
                    Delete dialog box
                    <button className="close-button" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="dialog-content">
                    <p>Are you sure you want to delete?</p>
                </div>
                <div className="dialog-actions">
                    <button className="cancel-button" onClick={onClose}>
                        Cancel
                    </button>
                    <button className="delete-button" onClick={onConfirm}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteDialog;
