"use client";
import Image from "next/image";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Bar from "../component/home/bar";
import AddModal from "../component/modal/adduser";
import EditModal from "../component/modal/edit";
import DeleteModal from "../component/modal/delete";

export default function Homepage() {
    const [users, setUsers] = useState([
        {
            "id": 1,
            "username": "********",
            "email": "********@********.com",
            "first_name": "********",
            "last_name": "********",
            "is_active": true,
            "date_joined": "2024-08-09T18:01:17.988250+07:00"
        },
        {
            "id": 2,
            "username": "********",
            "email": "********@********.com",
            "first_name": "********",
            "last_name": "********",
            "is_active": true,
            "date_joined": "2024-08-09T18:01:17.988250+07:00"
        },
        {
            "id": 3,
            "username": "********",
            "email": "********@********.com",
            "first_name": "********",
            "last_name": "********",
            "is_active": true,
            "date_joined": "2024-08-09T18:01:17.988250+07:00"
        },
        {
            "id": 4,
            "username": "********",
            "email": "********@********.com",
            "first_name": "********",
            "last_name": "********",
            "is_active": true,
            "date_joined": "2024-08-09T18:01:17.988250+07:00"
        },
        {
            "id": 5,
            "username": "********",
            "email": "********@********.com",
            "first_name": "********",
            "last_name": "********",
            "is_active": true,
            "date_joined": "2024-08-09T18:01:17.988250+07:00"
        },
        {
            "id": 6,
            "username": "********",
            "email": "********@********.com",
            "first_name": "********",
            "last_name": "********",
            "is_active": true,
            "date_joined": "2024-08-09T18:01:17.988250+07:00"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        first_name: "",
        last_name: "",
    });

    const [selectedUser, setSelectedUser] = useState<any>(null);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const openAddModal = () => setIsAddModalOpen(true);
    const openEditModal = (user: any) => { setSelectedUser(user); setIsEditModalOpen(true); };
    const openDeleteModal = (user: any) => { setSelectedUser(user); setIsDeleteModalOpen(true); };

    const closeModal = () => {
        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
        setIsDeleteModalOpen(false);
        setNewUser({ username: "", email: "", first_name: "", last_name: "" });
        setSelectedUser(null);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSelectedUser((prevUser: any) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleAddSubmit = () => {
        const newUserWithId = {
            ...newUser,
            id: users.length + 1,
            date_joined: new Date().toISOString(),
            is_active: true,
        };
        setUsers((prevUsers) => [...prevUsers, newUserWithId]);
        closeModal();
    };

    const handleEditSubmit = () => {
        // ตรวจสอบว่า selectedUser มีข้อมูลก่อน
        if (selectedUser) {
            // อัปเดตข้อมูลผู้ใช้ใน state
            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    user.id === selectedUser.id ? selectedUser : user
                )
            );
            closeModal();  // ปิด modal หลังจากอัปเดตสำเร็จ
        }
    };

    const handleDeleteSubmit = () => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== selectedUser.id));
        closeModal();
    };

    const filteredUsers = users.filter((user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50/50">
            <Bar></Bar>

            <div className="flex justify-end bg-cover bg-center" style={{ backgroundImage: 'url("https://i.pinimg.com/736x/fe/0c/46/fe0c468c8faf344dfc858c19cde399f4.jpg")' }}>
                <div className="flex justify-end items-center h-screen mr-20">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg items-center w-full">
                        <div className="flex flex-col gap-2 shrink-0 sm:flex-row w-full justify-between ">
                            <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-black">
                                User Management
                            </h5>
                            <button
                                className="flex select-none items-center gap-3 rounded-lg bg-sky-200 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20"
                                type="button"
                                onClick={openAddModal}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="w-4 h-4 stroke-2"
                                >
                                    <path
                                        d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"
                                    ></path>
                                </svg>
                                Add member
                            </button>
                        </div>

                        <div className=" flex flex-col gap-2 shrink-0 sm:flex-row w-full justify-between items-center">
                            <p className="block mt-3 mb-3 font-sans text-base antialiased font-normal leading-relaxed text-black px-2">
                                See information about all users
                            </p>
                            <div className="flex flex-1 justify-end h-20 items-center px-4">
                                <TextField
                                    className="w-[300px]"
                                    label="Search"
                                    variant="outlined"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    size="small"
                                />
                            </div>
                        </div>

                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-500">
                            {/* ส่วนหัวตาราง */}
                            <thead className="text-xs text-orange-200 uppercase bg-gray-500 dark:bg-gray-900 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">ID</th>
                                    <th scope="col" className="px-6 py-3">Username</th>
                                    <th scope="col" className="px-6 py-3">Email</th>
                                    <th scope="col" className="px-6 py-3">First Name</th>
                                    <th scope="col" className="px-6 py-3">Last Name</th>
                                    <th scope="col" className="px-6 py-3">Date Joined</th>
                                    <th scope="col" className="px-6 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map((user) => (
                                    <tr key={user.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                            {user.id}
                                        </th>
                                        <td className="px-6 py-4">{user.username}</td>
                                        <td className="px-6 py-4">{user.email}</td>
                                        <td className="px-6 py-4">{user.first_name}</td>
                                        <td className="px-6 py-4">{user.last_name}</td>
                                        <td className="px-6 py-4">
                                            {new Date(user.date_joined).toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex space-x-4">
                                                <button
                                                    className="text-blue-600 dark:text-blue-500 hover:underline"
                                                    onClick={() => openEditModal(user)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="text-red-600 dark:text-red-500 hover:underline"
                                                    onClick={() => openDeleteModal(user)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* เพิ่ม user */}
                        <AddModal
                            isOpen={isAddModalOpen}
                            onClose={closeModal}
                            onSubmit={handleAddSubmit}
                            newUser={newUser}
                            handleInputChange={handleInputChange}
                        />

                        {/* Edit Modal */}
                        <EditModal
                            isOpen={isEditModalOpen}
                            onClose={closeModal}
                            onSubmit={handleEditSubmit}
                            user={selectedUser || newUser}
                            handleInputChange={handleInputChange}
                        />

                        {/* Delete Confirmation Modal */}
                        <DeleteModal
                            isOpen={isDeleteModalOpen}
                            onClose={closeModal}
                            onDelete={handleDeleteSubmit}
                            user={selectedUser}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}