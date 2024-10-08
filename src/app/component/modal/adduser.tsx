import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    newUser: {
        username: string;
        email: string;
        first_name: string;
        last_name: string;
    };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddModal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, newUser, handleInputChange }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-xl font-semibold mb-4">Add New Member</h2>
                <div className="flex flex-col space-y-3">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={newUser.username}
                        onChange={handleInputChange}
                        className="border p-2 rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={newUser.email}
                        onChange={handleInputChange}
                        className="border p-2 rounded"
                    />
                    <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        value={newUser.first_name}
                        onChange={handleInputChange}
                        className="border p-2 rounded"
                    />
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        value={newUser.last_name}
                        onChange={handleInputChange}
                        className="border p-2 rounded"
                    />
                </div>
                <div className="flex justify-end mt-4 space-x-4">
                    <button onClick={onClose} className="bg-gray-300 text-gray-800 px-4 py-2 rounded">
                        Cancel
                    </button>
                    <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddModal;
