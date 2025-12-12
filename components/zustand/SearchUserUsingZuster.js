"use client";
import React from "react";
import { useAddUserStore } from "@/zustand-store/zustandStore";

const SearchUserZustand = React.memo(function ChildZustand() {
  console.log("ChildZustand re-rendered");
  const { searchInput, setSearch, SearchUser, searchData } = useAddUserStore();

  return (
    <div>
      <input
        type="text"
        placeholder="Search user..."
        className="outline-amber-400"
        value={searchInput}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="w-40 bg-pink-400 text-white p-4" onClick={SearchUser}>
        SearchUser
      </button>
      <ul style={{ marginTop: "10px" }}>
        {searchData.length > 0 ? (
          searchData.map((u, index) => (
            <li key={index}>
              {u.name} - {u.age}
            </li>
          ))
        ) : (
          <p>No user found</p>
        )}
      </ul>
    </div>
  );
});

export default SearchUserZustand;
