import React from "react";
import { brand } from "../assets/assets";

const Header = () => {
  return (
    <div style={{ background: "#fff", borderBottom: "1px solid #ddd" }}>
      <div
        className="container flex space-between "
        style={{ padding: "15px 0" }}
      >
        <img src={brand.logo} alt="" />
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              padding: "8px",
              width: "350px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <select style={{ padding: "8px" }}>
            <option>All category</option>
          </select>
          <button
            style={{
              background: "#2a7be4",
              color: "#fff",
              border: "none",
              padding: "8px 20px",
              borderRadius: "4px",
            }}
          >
            Search
          </button>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <span>Profile</span>
          <span>Message</span>
          <span>Orders</span>
          <span>My cart</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
