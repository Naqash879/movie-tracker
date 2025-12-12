"use client";
import React, { useEffect, useState } from "react";
import { useAddUserStore } from "@/zustand-store/zustandStore";
import FormButton from "@/components/FormButton";
import InputField from "@/components/InputField";
import SearchUserZustand from "@/components/zustand/SearchUserUsingZuster";

export default function ZustandCounter() {
  const {
    name,
    age,
    setName,
    setAge,
    AddUser,
    DeleteUser,
    UpdateUser,
    user,
    loadUserFromCookie,
  } = useAddUserStore();

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Load users from cookie on mount
  useEffect(() => {
    loadUserFromCookie();
  }, []);

  // Handle update form submission
  const handleUpdate = (e) => {
    e.preventDefault();
    if (selectedIndex !== null) {
      UpdateUser(selectedIndex, { name, age });
      setShowUpdateForm(false);
      setSelectedIndex(null);
    }
  };

  return (
    <div style={{ padding: "20px", border: "1px solid red" }}>
      <h1>Zustand + Cookie User Management</h1>
      <SearchUserZustand />

      {!showUpdateForm && (
        <div>
          <div style={{ marginBottom: "20px" }}>
            <InputField
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputField
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <button
              className="bg-blue-600 pd-4 rounded-2xl text-amber-50 mx-auto block w-sm shrink"
              onClick={AddUser}
            >
              Add User
            </button>
          </div>

          <div>
            <h2>User List</h2>
            <ul>
              {user?.map((u, index) => (
                <li
                  className="flex flex-col"
                  key={index}
                  style={{ marginBottom: "10px" }}
                >
                  {u.name} - {u.age}{" "}
                  <div
                    className="gap-4"
                    style={{ display: "inline", marginRight: "10px" }}
                  >
                    <button
                      className="bg-red-400 w-40 rounded-2xl pd-4 text-white"
                      onClick={() => DeleteUser(index)}
                    >
                      Delete
                    </button>{" "}
                    <button
                      className="bg-green-400 w-40 rounded-2xl pd-4 text-white"
                      onClick={() => {
                        setSelectedIndex(index);
                        setName(u.name);
                        setAge(u.age);
                        setShowUpdateForm(true);
                      }}
                    >
                      Update
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="UpdateForm">
        {showUpdateForm && selectedIndex !== null && (
          <form
            onSubmit={handleUpdate}
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "200px",
            }}
          >
            <h3>Update User</h3>
            <InputField
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputField
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <button
              className="bg-blue-600 pd-4 rounded-2xl text-amber-50 mx-auto block w-sm"
              type="submit"
            >
              Save Update
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
