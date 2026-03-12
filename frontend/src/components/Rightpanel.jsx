import React from "react";

const Rightpanel = () => {
  return (
    <div
      style={{
        width: "230px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div style={{ background: "#fff", padding: "15px", borderRadius: "6px" }}>
        <p>
          Hi, user <br />
          let's get started{" "}
        </p>
        <button
          style={{
            marginTop: "10px",
            width: "100%",
            background: "#2a7be4",
            color: "#fff",
            border: "none",
            padding: "8px",
          }}
        >
          Join now
        </button>
        <button
          style={{
            marginTop: "8px",
            width: "100%",
            padding: "8px",
            color:"#205397",
            
          }}
        >
          Log in
        </button>
        <div
          style={{
            background: "#f5822a",
            color: "#fff",
            padding: "15px",
            borderRadius: "6px",
          }}
        >
          Get US $10 off
          <br />
          with a new supplier
        </div>

        <div
          style={{
            background: "#59c0c2",
            color: "#fff",
            padding: "15px",
            borderRadius: "6px",
          }}
        >
          Send quotes with supplier preferences
        </div>
      </div>
    </div>
  );
};

export default Rightpanel;
