import React from 'react';

interface DeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
    user: { username: string; };
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, onDelete, user }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-xl font-semibold mb-4">Are you sure you want to delete {user.username}?</h2>
                <div className="flex justify-end mt-4 space-x-4">
                    <button onClick={onClose} className="bg-gray-300 text-gray-800 px-4 py-2 rounded">
                        Cancel
                    </button>
                    <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
