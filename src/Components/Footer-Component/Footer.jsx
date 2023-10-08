//using inline style here
import React from "react";

export default function Footer() {
  return (
    <>
      <footer
        className="d-flex justify-content-center"
        style={{
          backgroundColor: "#2C0047",
          borderTop: "3px solid white",
          padding: "10px",
          color: "#f7ea66",
          zIndex: 9999,
        }}
      >
        <span>Copyright © 2018. All rights reserved by Designer</span>
      </footer>
    </>
  );
}
