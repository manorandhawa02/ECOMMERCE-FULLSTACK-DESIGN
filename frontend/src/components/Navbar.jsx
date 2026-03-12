import React from "react";
import { FaBars } from "react-icons/fa";
import { cn, de, dk, fr, it, ru, us } from "../assets/assets";

const flags = [
  { name: "USA", img: us },
  { name: "Germany", img: de },
  { name: "France", img: fr },
  { name: "Russia", img: ru },
  { name: "Italy", img: it },
  { name: "Denmark", img: dk },
  { name: "Canada", img: cn },
];

const Navbar = () => {
  return (
    <div style={{ background: "#fff", borderBottom: "1px solid #ddd" }}>
      <div
        className="container flex space-between"
        style={{ padding: "12px 0" }}
      >
        {/* LEFT SIDE */}
        <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <FaBars />
            All category
          </span>

          <span>Hot offers</span>
          <span>Gift boxes</span>
          <span>Projects</span>
          <span>Menu item</span>
          <span>Help ▾</span>
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <span>English, USD</span>

          <div>
            Ship to{" "}
            <select style={{ padding: "4px" }}>
              {flags.map((flag, index) => (
                <option key={index} value={flag.name}>
                  {flag.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;