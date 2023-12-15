import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#1a202c",
        color: "#fff",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3 style={{ marginBottom: "1rem" }}>Stay Connected</h3>
        <p style={{ marginBottom: "0.5rem" }}>
          Subscribe to our newsletter for updates
        </p>
        <div style={{ display: "flex", marginBottom: "1rem" }}>
          <input
            id="emailInput"
            placeholder="Enter your email"
            style={{
              width: "60%",
              padding: "0.5rem",
              border: "2px solid #38a169",
              borderRadius: "4px",
              outline: "none",
              marginRight: "0.5rem",
            }}
          />
          <button
            style={{
              padding: "0.5rem 1rem",
              fontSize: "16px",
              backgroundColor: "#38a169",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#1a202c",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "0.5rem",
          padding: "0.5rem",
          borderRadius: "4px",
        }}
      >
        <p style={{ color: "#fff", margin: 0 }}>
          Follow us on social media:
          <a
            href="#"
            style={{
              marginLeft: "10px",
              color: "#fff",
              marginRight: "1rem",
              textDecoration: "none",
            }}
          >
            Facebook
          </a>
          <a
            href="#"
            style={{
              color: "#fff",
              marginRight: "1rem",
              textDecoration: "none",
            }}
          >
            Twitter
          </a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
