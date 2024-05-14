import React, { useState, useEffect } from "react";

function OutputDisplayComponent() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div
      className="border-8 border-amber-500 rounded-lg p-4 m-4 bg-amber-100"
      style={{
        width: "500px",
        height: "800px",
        overflow: "auto",
        fontSize: "32px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {message ? message : "Loading..."}
    </div>
  );
}

export default OutputDisplayComponent;
